import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  staff: any = {};

  ngOnInit() {
    this.route.params.subscribe(p=>{
      this.id = p['id'];
    })
    this.http.get(`api/staffs/${this.id}`).subscribe(data=>{
      this.staff = data;
      console.log(this.staff)
    })
  }

}
