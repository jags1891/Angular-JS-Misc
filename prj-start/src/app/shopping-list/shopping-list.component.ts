import { Component, OnInit } from '@angular/core';
import { Ingredient } from "app/shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [ new Ingredient('Turmeric', 50) ,
  new Ingredient('chilly', 50) ,
  new Ingredient('pepper', 50) 
]
  constructor() { }

  ngOnInit() {
  }

}
