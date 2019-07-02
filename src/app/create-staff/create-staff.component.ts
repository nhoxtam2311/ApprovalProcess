import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css']
})
export class CreateStaffComponent implements OnInit {

  constructor(public http: HttpClient, private router: Router) { }

  formdata: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.required),
      phoneNumber: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      workFor: new FormControl("", Validators.required),
      position: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      age: new FormControl("", Validators.required),
      dateOfBirth: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required)
    });
  }

  createStaff(): void {
    this.http.post("api/staffs", this.formdata.value
    ).subscribe(result => {
      this.router.navigate(['viewStaff', result['_id']])
    })

  }
}
