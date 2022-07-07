import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-angulartabs',
  templateUrl: './angulartabs.component.html',
  styleUrls: ['./angulartabs.component.scss']
})
export class AngulartabsComponent implements OnInit {
  commontablist:any;
  selectedList:any;
  copyToClipboard:any;
  copytxt: any;
  constructor(public _common:CommonService, public _copy:CopyserviceService) { 

    
  }

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

