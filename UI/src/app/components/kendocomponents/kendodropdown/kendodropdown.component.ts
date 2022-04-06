import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendodropdown',
  templateUrl: './kendodropdown.component.html',
  styleUrls: ['./kendodropdown.component.scss']
})
export class KendodropdownComponent implements OnInit {
  public modal:any
  public defaultItem: { Name: string; Id: number } = { Name: "-- Select --", Id: null };
  public impurities: any[] = [{ Name: "Yes", Id: 1 }, { Name: "No", Id: 0 }];
  constructor() { }


  ngOnInit(): void {
    this.modal=1;
  }

}
