import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=05db07e27024bc56a1e3aa80f74fc6bd';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<any>(this.configUrl);
  }

}
