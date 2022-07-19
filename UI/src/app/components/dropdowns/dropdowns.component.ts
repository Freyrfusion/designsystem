import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent implements OnInit {
  commontablist:any;
  selectedList:any;
  copyToClipboard:any;
  copytxt: any;

  constructor(public _common:CommonService, public _copy:CopyserviceService) { }

  ngOnInit(): void {
    this.commontablist=this._common.ngtabList();
    this.selectedList = 0;
    this.copyToClipboard=this._copy.copyToClipboard;
    this.copytxt = this._copy.copytxt;
    

    var menuHeader = $('.dropdown-header');
   
    // var menuHeadertoggle = $('.dropdown-header').attr('data-toggle');
    // var menuContainer = $('.dropdown-header ~ .dropdown-container').attr('id'); //$("#"+ menuHeadertoggle).attr('id');
        menuHeader.click(function(){
          var select = $(this);
          var menuHeadertoggle = select.attr('data-toggle');
          //var menuContainer = $('.dropdown-header ~ .dropdown-container').attr('id');
          var menuContainer = select.siblings(".dropdown-container").attr('id');
       
          $("#"+ menuContainer).toggleClass("active");
        });
  }
  openTabList(commontablist:any){ 
    this.selectedList = commontablist; 
   }
}

