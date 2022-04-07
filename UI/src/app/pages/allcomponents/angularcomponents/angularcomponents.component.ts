import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-angularcomponents',
  templateUrl: './angularcomponents.component.html',
  styleUrls: ['./angularcomponents.component.scss']
})
export class AngularcomponentsComponent implements OnInit {

  constructor(public router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
