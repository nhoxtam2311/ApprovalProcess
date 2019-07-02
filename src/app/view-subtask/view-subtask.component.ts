import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-subtask',
  templateUrl: './view-subtask.component.html',
  styleUrls: ['./view-subtask.component.css']
})
export class ViewSubtaskComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }
  id: String;
  subTask: any = {};
  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    })
    this.http.get(`api/subTasks/${this.id}`).subscribe(data => {
      this.subTask = data;
      console.log(this.subTask)
    })
  }
  listMenu: Array<any> = [
    { route: "/viewSubtask/:id", description: "Subtask" }
  ]

}
