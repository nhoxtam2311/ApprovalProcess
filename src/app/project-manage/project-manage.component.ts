import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-manage',
  templateUrl: './project-manage.component.html',
  styleUrls: ['./project-manage.component.css']
})
export class ProjectManageComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  projects: any = [];

  ngOnInit() {
    this.http.get(`api/projects`).subscribe(data => {
      this.projects = data["_embedded"]["projects"];
    })
  }
  delete(id: string, i: number){
    this.http.delete(`api/projects/${id}`).subscribe(data => {
      this.projects.splice(i, 1);
    })
  }

}
