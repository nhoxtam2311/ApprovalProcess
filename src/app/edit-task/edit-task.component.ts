import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  task: any = {};
  formdata: FormGroup;

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.id = p['id'];
    })
    this.http.get(`api/tasks/${this.id}`).subscribe(data => {
      this.task = data;
      this.formdata = new FormGroup({
        fieldOfTask: new FormControl(this.task['fieldOfTask'], Validators.required),
        relatedOffice: new FormControl(this.task['relatedOffice'], Validators.required),
        deadline: new FormControl(new Date(this.task['deadline']).toISOString().slice(0, -1), Validators.required),
        description: new FormControl(this.task['description'], Validators.required)
      });
    })
  }

  update(){
    this.http.put(`api/tasks/${this.id}`, this.formdata.value).subscribe(data => {
      this.task = data;
    })
  }

}
