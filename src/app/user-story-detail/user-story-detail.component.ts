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
  userStoryDetails: any = [];

  ngOnInit() {
    this.http.get(`api/userStories`).subscribe(data => {
      this.userStoryDetails = data["_embedded"]["userStories"];
    })
  }

  delete(id: string, i: number){
    this.http.delete(`api/userStories/${id}`).subscribe(data => {
      this.userStoryDetails.splice(i, 1);
    })
  }

  listMenu: Array<any> = [
    { route: "/viewProject/:id", description: "Project Management" },
    { route: "/userStoryDetail/:id", description: "User Story" }
  ]
}
