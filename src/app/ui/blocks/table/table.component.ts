import {
  Component,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent {
  @Input() public factor: 'full' | 'tableless' = 'full';
  @Input() public isLoading: boolean;
  @Input() public loadingText: string;
  @Input() public headers: string[][];
  @Input() public items: any[];
  @Input() public itemTemplateRef: TemplateRef<any>;
  @Input() public childTemplateRef: TemplateRef<any>;

  get showHeader(): boolean {
    return this.factor !== 'tableless';
  }
}
