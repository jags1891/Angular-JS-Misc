import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from '../../models/product';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  tableresource: DataTableResource<Product>;
  items: Product[] = []; // for the page
  itemCount: number;


  subscription: Subscription;

  constructor(productService: ProductService) {
    this.subscription = productService
    .getAll()
    .subscribe (products => {
      this.products = products;

      this.initializeTable(products);

    });

  }

  private initializeTable(products: Product[]) {

    this.tableresource = new DataTableResource(products);

    this.tableresource.query({offset : 0})
    .then( items => this.items = items );

    this.tableresource.count()
    .then( count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableresource) { return; }

    this.tableresource.query(params)
    .then( items => this.items = items );

  }
  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  filter(query: string) {
    const filteredProducts = (query) ?
    this.products.filter( p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;

    this.initializeTable(filteredProducts);
  }
}
