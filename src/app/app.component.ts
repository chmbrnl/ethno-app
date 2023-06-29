import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  query: string = '';

  constructor(private router: Router) {}

  onSearch(query: string) {
    this.router.navigate(['/search'], { queryParams: { q: query } });
  }
}