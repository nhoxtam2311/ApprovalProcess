import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.css']
})
export class ListStaffComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  staffs: any = [];

  ngOnInit() {

    this.http.get(`api/staffs`).subscribe(data => {
      this.staffs = data["_embedded"]["staffs"];
    })
  }

  delete(id: string, i: number){
    this.http.delete(`api/staffs/${id}`).subscribe(data => {
      this.staffs.splice(i, 1);
    })
  }

}
