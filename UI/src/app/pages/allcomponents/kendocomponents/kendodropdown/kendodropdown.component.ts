import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';

@Component({
  selector: 'app-kendodropdown',
  templateUrl: './kendodropdown.component.html',
  styleUrls: ['./kendodropdown.component.scss']
})
export class KendodropdownComponent implements OnInit {
  commontablist:any;
  selectedList:any;
  copyToClipboard:any;
  copytxt: any;
  constructor(public _common:CommonService, public _copy:CopyserviceService) { }
  public modal:any
  public defaultItem: { Name: string; Id: number } = { Name: "-- Select --", Id: null };
  public impurities: any[] = [{ Name: "Yes", Id: 1 }, { Name: "No", Id: 0 }];

  public listItems: Array<string> = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia & Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Italy",
    "Kosovo",
    "Latvia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Turkey",
    "Ukraine",
    "United Kingdom",
    "Vatican City",
  ];
  
  public listItems1: Array<{ text: string; value: number; inStock: boolean }> = [
    { text: "XS", value: 1, inStock: false },
    { text: "S", value: 2, inStock: true },
    { text: "M", value: 3, inStock: false },
    { text: "L", value: 4, inStock: true },
    { text: "XL", value: 5, inStock: false },
  ];

  public itemDisabled(itemArgs: { dataItem: any; index: number }) {
    return !itemArgs.dataItem.inStock;
  }

  ngOnInit(): void {
    this.modal=1;
    this.commontablist=this._common.ngtabList();
    this.selectedList = 0;
    this.copyToClipboard=this._copy.copyToClipboard;
    this.copytxt = this._copy.copytxt;
  }
  openTabList(commontablist:any){
    this.selectedList = commontablist;

  }

}
