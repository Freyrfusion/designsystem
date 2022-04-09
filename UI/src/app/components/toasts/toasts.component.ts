import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  commontablist:any;
  commontablist1:any;
  selectedList:any;
  selectedList1:any;
  copyToClipboard:any;
  copytxt: any;

  constructor(public _common:CommonService, public _copy:CopyserviceService) { }

  ngOnInit(): void {
    this.commontablist=this._common.ngtabList();
    this.commontablist1=this._common.ngtabList1();
    this.selectedList = 0;
    this.selectedList1 = 0;
    this.copyToClipboard=this._copy.copyToClipboard;
    this.copytxt = this._copy.copytxt;
  }
  openTabList(commontablist:any){ 
    this.selectedList = commontablist; 
   }
   openTabList1(commontablist1:any){ 
    this.selectedList1 = commontablist1; 
   }
}
$(document).ready(function(){
  $('.toast__close').click(function(e){
    e.preventDefault();
    var parent = $(this).parent('.toast');
    parent.fadeOut("slow", function() { $(this).remove(); } );
  });
});
