import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sass-angular';
  searchedKeyword: string;

  constructor(
    private router: Router,
  ) { }

  loadTabComponent(value: any) {

  }
  
  SearchFunction() {
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
