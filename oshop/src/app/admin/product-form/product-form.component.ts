import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  id;

  constructor(
    categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categories$ = categoryService.getCategories();

     this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.productService.getProduct(this.id)
      .take(1) // takes one value from the observable complets the observable
      .subscribe( p => {
        this.product = p;
      });
    }
  }

  save(form: NgForm) {
    if (form.status === 'VALID') {

      if (this.id) {
        this.productService.updateProduct(this.id, this.product);
      } else {
        this.productService.create(form.value);
      }

      this.router.navigate(['/admin/products']);
    }

  }

  delete() {

    if (this.id && confirm('Are you sure you want to delete this item?')) {

      this.productService.deleteProduct(this.id);
      this.router.navigate(['/admin/products']);
    }
  }

  filter(query) {
    console.log(query);
  }

  ngOnInit() {
  }

}
