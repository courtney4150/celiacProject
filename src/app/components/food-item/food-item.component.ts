import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  @Input() foodName = '';
  @Input() foodManufacturer = '';
  @Input() foodDescription = '';
  @Input() foodLink = '';
  childFoodLink = this.foodLink;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }


}
