import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-user-story',
  templateUrl: './menu-user-story.component.html',
  styleUrls: ['./menu-user-story.component.css']
})
export class MenuUserStoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  listMenu: Array<any>;  
}
