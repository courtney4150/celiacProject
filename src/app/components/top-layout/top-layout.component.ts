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
  public searchCert = '';
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

  public onSearch(formValues: any): void {
    console.log(formValues);
    this.foodsList = this._allFoodsList.filter((food) => 
    (food.name.toLowerCase().includes(formValues.search) ||
    food.manufacturer.toLowerCase().includes(formValues.search)) &&
    food.cert.toLowerCase().includes(formValues.certification)
    );
  }
}
