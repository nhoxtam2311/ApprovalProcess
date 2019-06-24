import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(public http: HttpClient) { }
  formdata: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
      fieldOfTask: new FormControl("", Validators.required),
      relatedOffice: new FormControl("", Validators.required),
      deadline: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required)
    });
  }
  createTask(): void {
    this.http.post("api/tasks", this.formdata.value
    ).subscribe(result => {
      console.log(result);
    })
  }
}
