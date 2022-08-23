import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';

@Component({
  selector: 'app-sweetalerts',
  templateUrl: './sweetalerts.component.html',
  styleUrls: ['./sweetalerts.component.scss']
})
export class SweetalertsComponent implements OnInit {
  commontablist: any;
  selectedList: any;
  copyToClipboard: any;
  copytxt: any;
  constructor(public _common: CommonService, public _copy: CopyserviceService) { }

  ngOnInit(): void {
    this.commontablist = this._common.ngtabList();
    this.selectedList = 0;
    this.copyToClipboard = this._copy.copyToClipboard;
    this.copytxt = this._copy.copytxt;
    $(".sweet-alert#pop1").click(function () {    
      $(".sweet-alert-overlay#pop1").addClass("active");      
    });
    $(".sweet-alert.close").click(function () {    
      $(".sweet-alert-overlay").removeClass("active");      
    });
    $(".sweet-alert#pop2").click(function () {    
      $(".sweet-alert-overlay#pop2").addClass("active");      
    });
  }
  openTabList(commontablist: any) {
    this.selectedList = commontablist;
  }
}
