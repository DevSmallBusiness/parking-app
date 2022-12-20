import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs';
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  path: string = '';
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.path = this.router.url;
  }
}
