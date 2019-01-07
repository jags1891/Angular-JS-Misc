import { Component, OnInit } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  
  recipes: Recipe[]=[
  new Recipe('A test recipe', 'this is simply a test','https://upload.wikimedia.org/wikipedia/commons/2/21/Tempe_Burger.jpg'),
  new Recipe('A test recipe 1', 'this is simply a test 1','https://upload.wikimedia.org/wikipedia/commons/2/21/Tempe_Burger.jpg'),
  new Recipe('A test recipe 2', 'this is simply a test 2','https://upload.wikimedia.org/wikipedia/commons/2/21/Tempe_Burger.jpg')
  ]

  constructor() { }
  ngOnInit() {}

}
