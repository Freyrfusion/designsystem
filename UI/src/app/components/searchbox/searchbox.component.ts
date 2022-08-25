import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
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
    $("#inpt_search").on('focus', function () {
      $(this).parent('label').addClass('active');
    });
    
    $("#inpt_search").on('blur', function () {
      if($(this).val().length == 0)
        $(this).parent('label').removeClass('active');
    });
  }
  openTabList(commontablist: any) {
    this.selectedList = commontablist;
  }
}
