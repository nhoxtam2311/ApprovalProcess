import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  details: any = [];

  ngOnInit() {
    this.http.get(`api/tasks`).subscribe(data => {
      this.details = data["_embedded"]["tasks"];
    })
  }

  delete(id: string, i: number){
    this.http.delete(`api/tasks/${id}`).subscribe(data => {
      this.details.splice(i, 1);
    })
  }

  listMenu: Array<any> = [
    { route: "/viewUserStory/:id", description: "User Story" },
    { route: "/viewDetail/:id", description: "Tasks" }
  ]

}
