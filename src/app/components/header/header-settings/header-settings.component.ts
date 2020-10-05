import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header-settings',
  templateUrl: './header-settings.component.html',
  styleUrls: ['./header-settings.component.scss']
})
export class HeaderSettingsComponent implements OnInit {

  public filteringString: string = '';

  @Output()  public filterEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
  }

  public logIt(): void {
    console.log(this.filteringString);
  }

  public passFilter(): void {
    console.log(this.filteringString, 'FROM HEADER SETTINGS');
    this.filterEvent.emit(this.filteringString);
  }
}
