import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKQES-kybALzTKKVO-mFr89fJZnaJ6pOt5oIc5up5eoIo9rZPVQ')
  ];
  constructor() { }

  ngOnInit() {
  }

}
