import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'parking-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements AfterViewInit {
  private router = inject(Router);
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  @Input() isSidebarClose: boolean;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter();

  ngAfterViewInit(): void {
    let linkActive = 'home';
    this.router.url.includes('history') ? (linkActive = 'history') : 'home';
    const links = this.el.nativeElement.querySelectorAll('.navbar__item');
    links?.forEach((link) => link.classList.remove('navbar__item--active'));
    this.renderer.addClass(
      this.el.nativeElement.querySelector(`#navbar__item--${linkActive}`),
      'navbar__item--active'
    );
  }

  handleToggleMenu(): void {
    this.toggleSidebar.emit(!this.isSidebarClose);
  }

  get iconItemMain(): string {
    return this.isSidebarClose ? 'chevrons-right' : 'chevrons-left';
  }

  changePage(url: string): void {
    this.router.navigateByUrl(url);
  }
}
