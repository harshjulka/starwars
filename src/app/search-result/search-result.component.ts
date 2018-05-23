import { Component, OnInit } from '@angular/core';
import { SwapService } from './swap.service';
import { UserLoginService } from '../login/user-login.service';

@Component({
  selector: 'star-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  data: string[];
  name: string;
  next: string;
  constructor(private swap: SwapService, private user: UserLoginService) { }
  url = 'https://swapi.co/api/planets/';

  ngOnInit() {
    this.name = this.user.getName();
  }

  onSearch(e) {
    const url = (e && e.target) ? 'https://swapi.co/api/planets/?search=' + (e.target.value ? e.target.value : '') : e;
    this.swap.getPlanets(url).subscribe( (data) => {
      if (this.data) {
        this.data = this.data.concat(data['results']);
        this.next = data['next'];
      } else {
      this.data = data['results'];
      this.next = data['next'];
      }
    });
  }

  onNext() {
    this.onSearch(this.next);
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

  onClick() {
    if (this.next) {
      this.onSearch(this.next);
    } else {
      this.onSearch('https://swapi.co/api/planets/?search=');
    }
  }
}
