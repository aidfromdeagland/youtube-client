import { Component, OnInit } from '@angular/core';
import { mockData } from '../../data/mock-response';
import { SearchResponse } from '../../models/search-response';
import { SearchItem } from '../../models/search-item';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public mockResponse: SearchResponse = mockData;
  public mockItems: SearchItem[] = mockData.items;

  constructor() { }

  public ngOnInit(): void {
  }

}
