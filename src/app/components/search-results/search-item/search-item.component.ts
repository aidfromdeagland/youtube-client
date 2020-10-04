import {Component, Input, OnInit} from '@angular/core';
import {SearchItem} from '../../../models/search-item';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public card: SearchItem;

  constructor() { }

  public ngOnInit(): void {
  }

  public getBorderColor(date: string): string {
    const currentDateStamp: number = Date.now();
    const inputDateStamp: number = Date.parse(date);

    if (currentDateStamp - inputDateStamp < 7 * 24 * 60 * 60 * 1000) {
      return '#0000ff';
    }

    if (currentDateStamp - inputDateStamp < 30 * 24 * 60 * 60 * 1000) {
      return '#00ff00';
    }

    return '#ff0000';
  }

}
