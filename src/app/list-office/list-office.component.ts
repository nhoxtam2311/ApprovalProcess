import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-office',
  templateUrl: './list-office.component.html',
  styleUrls: ['./list-office.component.css']
})
export class ListOfficeComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  offices: any = [];

  ngOnInit() {
    this.http.get(`api/analystOffices`).subscribe(data => {
      this.offices = data["_embedded"]["analystOffices"];
    })
  }
  delete(id: string, i: number){
    this.http.delete(`api/analystOffices/${id}`).subscribe(data => {
      this.offices.splice(i, 1);
    })
  }

}
