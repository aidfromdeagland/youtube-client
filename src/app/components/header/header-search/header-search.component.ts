import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {
  public headerInputPlaceholder: string = 'Type here';
  public inputValue: string = '';

  constructor() { }

  public logger(): void {
    console.log(this.inputValue);
  }

  public ngOnInit(): void {
  }

}
