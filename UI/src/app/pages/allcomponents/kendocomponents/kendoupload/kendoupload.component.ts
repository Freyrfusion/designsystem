import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';

@Component({
  selector: 'app-kendoupload',
  templateUrl: './kendoupload.component.html',
  styleUrls: ['./kendoupload.component.scss']
})
export class KendouploadComponent implements OnInit {
  commontablist: any;
  selectedList: any;
  copyToClipboard: any;
  copytxt: any;
  // uploadSaveUrl = "saveUrl"; // should represent an actual API endpoint
  // uploadRemoveUrl = "removeUrl"; // should represent an actual API endpoint

  constructor(public _common:CommonService, public _copy:CopyserviceService) { }

  ngOnInit(): void {
    this.commontablist=this._common.ngtabList();
    this.selectedList = 0;
    this.copyToClipboard=this._copy.copyToClipboard;
    this.copytxt = this._copy.copytxt;
  }
  openTabList(commontablist:any){
    this.selectedList = commontablist;

  }
}
