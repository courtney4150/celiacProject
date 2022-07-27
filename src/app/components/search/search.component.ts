import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FoodItemComponent } from '../food-item/food-item.component';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor() { }

  @Output() public search = new EventEmitter<string>();
  @Output() public cert = new EventEmitter<string>();

  public searchText = '';
  public searchCert = '';
  public searchFoods = FoodItemComponent.name;

  public ngOnInit(): void {
  }

  public onSeachCert(input: string) {
    this.searchCert = input.toLowerCase();
    this.cert.emit(this.searchCert);
  }

  public onSearch(): void {
    this.search.emit(this.searchText);
    var x = document.getElementById("show-results");
    if (x != null) { x.style.display = "block"; }
  }

  public clear(): void {
    this.searchText = '';
    this.searchCert = '';
    var x = document.getElementById("show-results");
    if (x != null && x.style.display == "block") { x.style.display = "none"; }
    this.onSearch();
  }
}
