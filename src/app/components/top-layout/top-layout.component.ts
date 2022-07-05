import { Component } from '@angular/core';
import foodsJson from 'src/app/food-list.json';

interface Food {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  learnmore: string;
}

@Component({
  selector: 'app-top-layout',
  templateUrl: './top-layout.component.html',
  styleUrls: ['./top-layout.component.css']
})
export class TopLayoutComponent {
  foods: Food[] = foodsJson;

  onSearch(searchText: string): void {
    console.log(searchText);
  }
}
