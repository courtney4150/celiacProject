import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public searchCert = '';
  public searchFoods = FoodItemComponent.name;

  public form: FormGroup = new FormGroup({
    certification: new FormControl(''),
    search: new FormControl('')
  });

  public ngOnInit(): void {
    this.form.valueChanges.subscribe(() => this.onSearch());
  }

  public onSearch(): void {
    this.searchText = this.form.value.search;
    setTimeout(() => this.search.emit(this.form.value), 0);
  }

  public clear(): void {
    this.form.reset();
    this.searchText = '';

    this.onSearch();
  }
}
