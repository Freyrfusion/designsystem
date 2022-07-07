import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-kendocomponents',
  templateUrl: './kendocomponents.component.html',
  styleUrls: ['./kendocomponents.component.scss']
})
export class KendocomponentsComponent implements OnInit {

  constructor(public router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
