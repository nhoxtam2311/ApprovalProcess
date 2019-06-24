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
  taskDetail: any = {};
  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    })
    this.http.get(`api/tasks/${this.id}`).subscribe(data => {
      this.taskDetail = data;
      console.log(this.taskDetail)
    })
  }
  listMenu: Array<any> = [
    { route: "/viewTask/:id", description: "Task" },
    { route: "/taskDetail/:id", description: "Subtasks" }
  ]
}
