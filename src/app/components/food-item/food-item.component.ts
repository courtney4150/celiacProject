import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import foodsJson from 'src/app/food-list.json';

interface Food {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  learnmore: string;
}

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit {

  foods: Food[] = foodsJson;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFood();
  }

  getFood(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
  }

}
