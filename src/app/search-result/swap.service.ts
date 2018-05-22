import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SwapService {
  constructor(private http: HttpClient) { }

  getPlanets(url) {
    return this.http.get(url);
  }

}
