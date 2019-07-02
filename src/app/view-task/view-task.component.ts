import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  task: any = {};

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    })
    this.http.get(`api/tasks/${this.id}`).subscribe(data => {
      this.task = data;
      console.log(this.task)
    })
  }
  listMenu: Array<any> = [
    { route: "/viewTask/:id", description: "Task" },
    { route: "/taskDetail/:id", description: "Subtasks" }
  ]
}
