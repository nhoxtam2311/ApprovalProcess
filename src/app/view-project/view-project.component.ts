import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    listMenu: Array<any>=[
      { route: "/viewProject", description: "Project Management"},
      { route: "/userStoryDetail", description: "User Story"}
    ]
}
