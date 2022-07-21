import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
//import foodsJson from 'src/app/food-list.json';

interface Food {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  learnmore: string;
  cert: string;
}

@Component({
  selector: 'app-top-layout',
  templateUrl: './top-layout.component.html',
  styleUrls: ['./top-layout.component.css']
})
export class TopLayoutComponent {
  public searchText = '';
  public foodsList: Food[] = [];
  private _allFoodsList: Food[] = [];

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    this.http
      .get<Food[]>('/assets/food-list.json')
      .subscribe((data: Food[]) => {
        this.foodsList = data;
        this._allFoodsList = this.foodsList;
      })
  }

  public onSearch(searchText: string): void {
    this.foodsList = this._allFoodsList.filter((food) => 
    food.name.toLowerCase().includes(searchText) ||
    food.manufacturer.toLowerCase().includes(searchText)
    );
  }
}
