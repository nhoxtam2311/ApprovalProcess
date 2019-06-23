import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
listMenu: Array<any>=[
  {route:"/viewTask", description:"Task"},
  {route:"/taskDetail", description:"Subtasks"}
]
}
