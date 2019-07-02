import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  taskDetails: any = [];
  ngOnInit() {
    this.http.get(`api/subTasks`).subscribe(data => {
      this.taskDetails = data["_embedded"]["subTasks"];
    })
  }

  delete(id: string, i: number){
    this.http.delete(`api/subTasks/${id}`).subscribe(data => {
      this.taskDetails.splice(i, 1);
    })
  }

  listMenu: Array<any> = [
    { route: "/viewTask/:id", description: "Task" },
    { route: "/taskDetail/:id", description: "Subtasks" }
  ]
}
