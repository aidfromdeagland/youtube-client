import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit {
  public name: string = 'Stanley';
  public avatarSrc: string = 'assets/images/icons/avatar-icon-1.svg';
  constructor() { }

  public ngOnInit(): void {
  }

}
