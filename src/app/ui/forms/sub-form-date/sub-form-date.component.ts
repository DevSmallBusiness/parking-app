import { ChangeDetectionStrategy, Component } from '@angular/core';
import { subformComponentProviders } from 'ngx-sub-form';

@Component({
  selector: 'parking-sub-form-date',
  templateUrl: './sub-form-date.component.html',
  styleUrls: ['./sub-form-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(SubFormDateComponent),
})
export class SubFormDateComponent {}
