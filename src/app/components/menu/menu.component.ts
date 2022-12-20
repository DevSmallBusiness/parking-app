import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor() {}
  
  isCollapsed: boolean = false;
  collapsedIconClass = "fas fa-angle-double-left";

  toggleMenu(): void {
    document
      .querySelector('.topbar__action')
      ?.classList.toggle('topbar__action--active');
    document
      .querySelector('.navbar__container')
      ?.classList.toggle('navbar__container--active');
    document
      .querySelector('.home__container')
      ?.classList.toggle('home__container--active');

      this.isCollapsed = !this.isCollapsed;
      this.isCollapsed 
        ? this.collapsedIconClass = "fas fa-angle-double-right" 
        : this.collapsedIconClass = "fas fa-angle-double-left" 
  }
}
