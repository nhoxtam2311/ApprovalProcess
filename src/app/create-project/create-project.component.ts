import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  constructor(public http: HttpClient, private router: Router) { }
  formdata: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
      nameOfProject: new FormControl("", Validators.required),
      startDate: new FormControl("", Validators.required),
      endDate: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      responsibleOffice: new FormControl("", Validators.required),
      deadline: new FormControl("", Validators.required),
    });
  }
  createProject(): void {
    this.http.post("api/projects", this.formdata.value
    ).subscribe(result => {
      this.router.navigate(['viewProject', result['_id']])
    })
  }
}
