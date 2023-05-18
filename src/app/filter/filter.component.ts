import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'course-app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {

  @Input() all = 0;
  @Input() free = 0;
  @Input() premium = 0;

  selectedRadioButton = 'All';

  @Output()
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButton);
    // console.log(this.selectedRadioButton) 
  }

}
