import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-office',
  templateUrl: './create-office.component.html',
  styleUrls: ['./create-office.component.css']
})
export class CreateOfficeComponent implements OnInit {

  constructor(public http: HttpClient) { }

  formdata: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
      numberOfMember: new FormControl("", Validators.required),
      phoneNumber: new FormControl("", Validators.required),
      officeNumber: new FormControl("", Validators.required),
      officeField: new FormControl("", Validators.required),
      officeName: new FormControl("", Validators.required),
      officeManagerId: new FormControl("", Validators.required)
    });
  }

  createOffice(): void {
    this.http.post("api/analystOffices", this.formdata.value
    ).subscribe(result => {
      console.log(result);
    })
    console.log('hello')
  }

}
