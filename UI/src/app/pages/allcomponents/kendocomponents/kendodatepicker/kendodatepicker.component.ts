import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';

@Component({
  selector: 'app-kendodatepicker',
  templateUrl: './kendodatepicker.component.html',
  styleUrls: ['./kendodatepicker.component.scss']
})
export class KendodatepickerComponent implements OnInit {
  commontablist: any;
  selectedList: any;
  copyToClipboard: any;
  copytxt: any;
  public value: Date = new Date(2000, 2, 10);
  constructor(public _common: CommonService, public _copy: CopyserviceService) { }

  ngOnInit(): void {
    this.commontablist = this._common.ngtabList();
    this.selectedList = 0;
    this.copyToClipboard = this._copy.copyToClipboard;
    this.copytxt = this._copy.copytxt;
  }
  openTabList(commontablist: any) {
    this.selectedList = commontablist;

  }

}
