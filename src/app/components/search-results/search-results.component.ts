import {Component, OnInit, Input, OnChanges} from '@angular/core';
import { mockData } from '../../data/mock-response';
import { SearchResponse } from '../../models/search-response';
import { SearchItem } from '../../models/search-item';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnChanges {
  @Input() public filteringString: string;

  public mockResponse: SearchResponse = mockData;
  public mockItems: SearchItem[] = mockData.items;
  public processedMockItems: SearchItem[] | [] = this.mockItems.slice();
  public viewSort: string = 'asc';
  public dateSort: string = 'none';

  constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: object): void {
    console.log(changes);
    this.filterResponses();
  }

  public filterResponses(): void {
    if (!this.filteringString) {
      this.processedMockItems = this.mockItems.slice();
    } else {
      this.processedMockItems = this.processedMockItems.filter((el) => {
        return el.snippet.localized.title.toLowerCase().includes(this.filteringString.toLowerCase());
      });
    }
  }

  public sortByViews(): void {
    if (this.viewSort !== 'none') {
      this.processedMockItems = this.processedMockItems.slice().sort((a, b) => {
        return +a.statistics.viewCount - +b.statistics.viewCount;
      });
    }
  }

  public sortByDate(): void {
  }
}
