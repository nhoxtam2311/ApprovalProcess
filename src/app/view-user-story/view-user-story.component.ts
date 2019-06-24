import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user-story',
  templateUrl: './view-user-story.component.html',
  styleUrls: ['./view-user-story.component.css']
})
export class ViewUserStoryComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  userStory: any = {};

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    })
    this.http.get(`api/userStories/${this.id}`).subscribe(data => {
      this.userStory = data;
      console.log(this.userStory)
    })
  }

  listMenu: Array<any> = [
    { route: "/viewUserstory/:id", description: "User Story" },
    { route: "/viewDetail/:id", description: "Tasks" }
  ]

}
