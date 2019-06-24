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
  detail: any = {};

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    })
    this.http.get(`api/tasks/${this.id}`).subscribe(data => {
      this.detail = data;
      console.log(this.detail)
    })
  }

  listMenu: Array<any> = [
    { route: "/viewUserStory/:id", description: "User Story" },
    { route: "/viewDetail/:id", description: "Tasks" }
  ]

}
