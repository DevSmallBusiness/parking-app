import { inject, Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/core/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class HeaderContainerFacade {
  private subscriptions: Subscription;
  private state = inject(AppState);

  //#region Observables
  isSidebarClose$(): Observable<boolean> {
    return this.state.resources.isSidebarClose.$();
  }
  //#endregion

  //#region Public methods
  initSubscriptions(): void {
    this.subscriptions = new Subscription();
  }

  destroySubscriptions(): void {
    this.subscriptions.unsubscribe();
  }

  setSidebarClose(value: boolean): void {
    this.state.resources.isSidebarClose.set(value);
  }
  //#endregion
}
