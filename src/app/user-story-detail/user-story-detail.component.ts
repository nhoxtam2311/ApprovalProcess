import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-story-detail',
  templateUrl: './user-story-detail.component.html',
  styleUrls: ['./user-story-detail.component.css']
})
export class UserStoryDetailComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  userStoryDetail: any = {};

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    })
    this.http.get(`api/userStories/${this.id}`).subscribe(data => {
      this.userStoryDetail = data;
      console.log(this.userStoryDetail)
    })
  }
  listMenu: Array<any> = [
    { route: "/viewProject/:id", description: "Project Management" },
    { route: "/userStoryDetail/:id", description: "User Story" }
  ]
}
