import { Component, OnInit, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()  public filterEvent: EventEmitter<string> = new EventEmitter<string>();

  public isSettingsOpened: boolean = false;
  public filteringString: string = '';

  constructor() {
  }

  public ngOnInit(): void {
  }

  public toggleSettings(): void {
    this.isSettingsOpened = !this.isSettingsOpened;
  }

  public receiveFilter(filterQuery: string): void {
    this.filteringString = filterQuery;
    this.passFilter();
  }

  public passFilter(): void {
    console.log(this.filteringString, 'FROM HEADER');
    this.filterEvent.emit(this.filteringString);
  }
}
