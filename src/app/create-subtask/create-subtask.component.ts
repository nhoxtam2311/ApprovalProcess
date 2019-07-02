import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-subtask',
  templateUrl: './create-subtask.component.html',
  styleUrls: ['./create-subtask.component.css']
})
export class CreateSubtaskComponent implements OnInit {

  constructor(
    public http: HttpClient,
    public route: Router) { }
  formdata: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
      fieldOfSubtask: new FormControl("", Validators.required),
      relatedStaffs: new FormControl("", Validators.required),
      deadline: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required)
    });
  }
  createSubtask(): void {
    this.http.post("api/subTasks", this.formdata.value
    ).subscribe(result => {
      this.route.navigate(['viewSubtask', result['_id']])

    })
    
  }
}
