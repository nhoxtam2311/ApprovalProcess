import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-subtask',
  templateUrl: './view-subtask.component.html',
  styleUrls: ['./view-subtask.component.css']
})
export class ViewSubtaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
listMenu: Array<any>=[
  {route:"/viewSubtask", description:"Subtask"}
]
  
}
