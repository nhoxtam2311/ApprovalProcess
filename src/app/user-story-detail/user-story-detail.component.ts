import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-story-detail',
  templateUrl: './user-story-detail.component.html',
  styleUrls: ['./user-story-detail.component.css']
})
export class UserStoryDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listMenu: Array<any>=[
    { route: "/viewProject", description: "Project Management"},
    { route: "/userStoryDetail", description: "User Story"}
  ]
}
