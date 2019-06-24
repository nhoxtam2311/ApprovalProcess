import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-user-story',
  templateUrl: './create-user-story.component.html',
  styleUrls: ['./create-user-story.component.css']
})
export class CreateUserStoryComponent implements OnInit {

  constructor(public http: HttpClient) { }
  formdata: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
      nameOfEvent: new FormControl("", Validators.required),
      startDate: new FormControl("", Validators.required),
      endDate: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      responsibleOffice: new FormControl("", Validators.required),
      deadline: new FormControl("", Validators.required),
    });
  }
  createUserStory(): void {
    this.http.post("api/userStories", this.formdata.value
    ).subscribe(result => {
      console.log(result);
    })
  }
}
