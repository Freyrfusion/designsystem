import { Component, OnInit } from '@angular/core';
interface Item {
  text: string;
  value: number;}
@Component({
  selector: 'app-kendomultiselect',
  templateUrl: './kendomultiselect.component.html',
  styleUrls: ['./kendomultiselect.component.scss']
})
export class KendomultiselectComponent implements OnInit {
  public listItems: Array<Item> = [{ text: "Small", value: 1 },{ text: "Medium", value: 2 },{ text: "Large", value: 3 },];
  public selectedItems: Item[] = [this.listItems[1]];
  constructor() { }
  

  ngOnInit(): void {
  }

}
