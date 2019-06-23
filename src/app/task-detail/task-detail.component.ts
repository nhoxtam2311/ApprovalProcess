import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listMenu: Array<any>=[
    { route: "/viewTask", description: "Task"},
    { route: "/taskDetail", description: "Subtasks"} 
  ]
}
