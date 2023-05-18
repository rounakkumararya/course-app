import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'course-app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {

  enteredSearchValue = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue)
  }

}
