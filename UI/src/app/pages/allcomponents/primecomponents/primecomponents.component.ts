import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-primecomponents',
  templateUrl: './primecomponents.component.html',
  styleUrls: ['./primecomponents.component.scss']
})
export class PrimecomponentsComponent implements OnInit {

  constructor(public router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
