import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  project: any = {};


  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    })
    this.http.get(`api/projects/${this.id}`).subscribe(data => {
      this.project = data;
      console.log(this.project)
    })
  }
  listMenu: Array<any> = [
    { route: "/viewProject/:id", description: "Project Management" },
    { route: "/userStoryDetail/:id", description: "User Story" }
  ]
}
