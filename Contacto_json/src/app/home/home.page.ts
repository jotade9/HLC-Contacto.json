import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Observable<any>;
  filtro: string = '';

  constructor(private http: HttpClient) {
    this.items = this.http.get('/assets/data.json');
  }
}
