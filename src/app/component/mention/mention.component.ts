import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.css']
})
export class MentionComponent implements OnInit {

  movies: any[];

  constructor(public configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getConfig().subscribe(res => {
      this.movies = res.results.map( movie =>{
        return {title: movie.title, overview: movie.overview};
      });
      console.log(this.movies);
    }, err => {
      console.log(err);
    });
  }
}
