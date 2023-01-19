import { StateFactory } from './factory.state';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ChangeHistoryModel } from '../models/change-history';

@Injectable({
  providedIn: 'root',
})
export class ChangesHistoryState {
  private changesHistory$: BehaviorSubject<ChangeHistoryModel[]> =
    new BehaviorSubject([]);
  private currentChangeHistoryToView$: BehaviorSubject<ChangeHistoryModel> =
    new BehaviorSubject(null);

  constructor(private factory: StateFactory) {}

  store() {
    return {
      changesHistory: this.factory.state(this.changesHistory$),
      currentChangeHistoryToView: this.factory.state(
        this.currentChangeHistoryToView$
      ),
    };
  }
}
