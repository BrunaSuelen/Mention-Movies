import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.css']
})
export class MentionComponent implements OnInit {

  configUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=05db07e27024bc56a1e3aa80f74fc6bd';
  items: string[] = ['Noah', 'Liam', 'Mason', 'Jacob'];
  movies: any[];

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<any>(this.configUrl);
  }

  ngOnInit(): void {
    this.getConfig().subscribe(res => {
      this.movies = res.results.map( movie =>{
        return {title: movie.title, overview: movie.overview};
      });
      console.log(this.movies);
    }, err => {
      console.log(err);
    });
  }
}
