import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import foodsJson from 'src/app/food-list.json';
import { FoodItemComponent } from '../food-item/food-item.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor() { }

  @Output() public search = new EventEmitter<string>();

  public searchText = '';
  public searchFoods = FoodItemComponent.name;

  public ngOnInit(): void {
  }

  public onSearch(): void {

    this.search.emit(this.searchText);
  }
}
