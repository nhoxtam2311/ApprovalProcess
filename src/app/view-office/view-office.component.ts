import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-office',
  templateUrl: './view-office.component.html',
  styleUrls: ['./view-office.component.css']
})
export class ViewOfficeComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  id: String;
  office: any = {};

  ngOnInit() {
    this.route.params.subscribe(p=>{
      this.id = p['id'];
    })
    this.http.get(`api/analystOffices/${this.id}`).subscribe(data=>{
      this.office = data;
      console.log(this.office)
    })
  }

}
