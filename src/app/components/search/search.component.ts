import { Component, OnInit } from '@angular/core';
import foodsJson from 'src/app/food-list.json';
import { FoodItemComponent } from '../food-item/food-item.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchText = '';
  searchFoods = FoodItemComponent.name;


  constructor() { }

  ngOnInit(): void {
  }

}
