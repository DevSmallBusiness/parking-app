import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderContainerFacade } from './header-container.facade';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainerComponent implements OnInit, OnDestroy {
  isSidebarClose$: Observable<boolean>;

  constructor(private facade: HeaderContainerFacade) {}

  ngOnInit(): void {
    this.initializeSubscriptions();
    this.facade.initSubscriptions();
    this.facade.setSidebarClose(true);
  }

  ngOnDestroy(): void {
    this.facade.setSidebarClose(true);
    this.facade.destroySubscriptions();
  }

  handleSetIsSidebarClose(value: boolean): void {
    this.facade.setSidebarClose(value);
  }

  private initializeSubscriptions(): void {
    this.isSidebarClose$ = this.facade.isSidebarClose$();
  }
}
