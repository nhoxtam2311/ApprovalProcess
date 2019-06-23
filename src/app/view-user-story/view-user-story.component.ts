import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user-story',
  templateUrl: './view-user-story.component.html',
  styleUrls: ['./view-user-story.component.css']
})
export class ViewUserStoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listMenu: Array<any>=[
    { route: "/viewUserstory", description: "User Story"},
    { route: "/viewDetail", description: "Tasks"}
  ]

}
