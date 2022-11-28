import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent{

  constructor() { }

  currentTab: number = 0;
  onClick(i: number){
    this.currentTab = i;
  }
}
