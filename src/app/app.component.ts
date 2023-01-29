import { AppFacade } from './app.facade';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'parking-root',
  template: '<ng-container><router-outlet></router-outlet></ng-container>',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private facade: AppFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.updateExpiredStatusToVehiclesRecords();
  }

  ngOnDestroy(): void {
    this.facade.destroySubscriptions();
  }
}
