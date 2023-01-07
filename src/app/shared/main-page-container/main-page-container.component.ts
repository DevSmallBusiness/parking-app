import { Observable } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { VehicleModel } from 'src/app/core/models/vehicle';
import { MainPageContainerFacade } from './main-page-container.facade';

@Component({
  selector: 'app-main-page-container',
  templateUrl: './main-page-container.component.html',
  styleUrls: ['./main-page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageContainerComponent implements OnInit, OnDestroy {
  vehicles$: Observable<VehicleModel[]>;
  isSidebarClose$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private facade: MainPageContainerFacade) {}

  ngOnInit(): void {
    this.facade.initSubscriptions();
    this.facade.loadVehicles();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.facade.destroyVehicles();
    this.facade.destroyIsLoading();
    this.facade.destroySubscriptions();
  }

  private initializeSubscriptions(): void {
    this.vehicles$ = this.facade.vehicles$();
    this.isSidebarClose$ = this.facade.isSidebarClose$();
    this.isLoading$ = this.facade.isLoading$();
  }
}
