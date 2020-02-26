import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.css']
})
export class MentionComponent implements OnInit {

  items: string[] = ['Noah', 'Liam', 'Mason', 'Jacob'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }
}
