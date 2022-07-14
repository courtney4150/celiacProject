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
  //foods: Food[] = foodsJson;
  searchText = '';
  foodsList: Food[] = [];
  allFoodsList: Food[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Food[]>('/assets/food-list.json')
      .subscribe((data: Food[]) => {
        this.foodsList = data;
        this.allFoodsList = this.foodsList;
      })
  }

  onSearch(searchText: string): void {
    console.log(searchText);
    this.foodsList = this.allFoodsList.filter((val) => 
    val.name.toLowerCase().includes(searchText)
    );
  }
}
