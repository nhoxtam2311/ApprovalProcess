import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-approve-form',
  templateUrl: './approve-form.component.html',
  styleUrls: ['./approve-form.component.css']
})
export class ApproveFormComponent implements OnInit {

  constructor() { }
  formdata: FormGroup;
  ngOnInit() {
    this.formdata = new FormGroup({
      name: new FormControl("", Validators.required),
      phoneNumber: new FormControl("", Validators.required),
      officeNumber: new FormControl("", Validators.required),
      officeField: new FormControl("", Validators.required),
      officeName: new FormControl("", Validators.required),
      officeManagerId: new FormControl("", Validators.required)
    });
  }

}
