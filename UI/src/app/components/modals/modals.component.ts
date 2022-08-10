import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
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

    $(".css-pop#pop1").click(function () {    
      $(".css-pop-overlay#pop1").addClass("active");      
    });
    $(".css-pop#pop2").click(function () {    
      $(".css-pop-overlay#pop2").addClass("active");      
    });
    $(".css-pop#pop3").click(function () {    
      $(".css-pop-overlay#pop3").addClass("active");      
    });
    $(".css-pop#pop4").click(function () {    
      $(".css-pop-overlay#pop4").addClass("active");      
    });
    $(".css-pop#pop5").click(function () {    
      $(".css-pop-overlay#pop5").addClass("active");      
    });
    $(".css-pop#pop6").click(function () {    
      $(".css-pop-overlay#pop6").addClass("active");      
    });
    $(".css-pop#pop7").click(function () {    
      $(".css-pop-overlay#pop7").addClass("active");      
    });
    $(".css-pop#pop8").click(function () {    
      $(".css-pop-overlay#pop8").addClass("active");      
    });
    $(".css-pop.close").click(function () {    
      $(".css-pop-overlay").removeClass("active");      
    });

  }
  openTabList(commontablist: any) {
    this.selectedList = commontablist;
  }
}



	


