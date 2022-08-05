import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  selectedList: any;
  commontablist: any;
  copyToClipboard: any;
  copytxt: any;
  constructor(public _common: CommonService, public _copy: CopyserviceService) {
    
   }

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
