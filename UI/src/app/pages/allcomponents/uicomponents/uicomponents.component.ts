import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-uicomponents',
  templateUrl: './uicomponents.component.html',
  styleUrls: ['./uicomponents.component.scss'],
  
})
export class UicomponentsComponent implements OnInit {

  constructor(public router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
