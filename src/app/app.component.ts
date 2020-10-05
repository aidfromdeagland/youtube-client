import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public filteringString: string = '';

  public receiveFilter(filterQuery: string): void {
    this.filteringString = filterQuery;
  }
}
