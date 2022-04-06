import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendoinputs',
  templateUrl: './kendoinputs.component.html',
  styleUrls: ['./kendoinputs.component.scss']
})
export class KendoinputsComponent implements OnInit {
  public textboxValue = "";
  constructor() { }

  ngOnInit(): void {
  }

}
