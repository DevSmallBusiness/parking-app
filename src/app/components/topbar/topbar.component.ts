import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
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
  }
}
