import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  commontablist:any;
  selectedList:any;
  copyToClipboard:any;
  copytxt: any;
  tevent:any;
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
  showNotification(event:any) {
    var type =  event.target.getAttribute("data-type");
    var status =  event.target.getAttribute("data-status");
  $('.button').removeClass('is-active');
  $(this).addClass('is-active');
  
  $('.notify')
    .removeClass()
    .removeAttr('style')
    .attr('data-notification-status', status)
    .addClass(type + ' notify')
    .addClass('do-show'); 
  
  event.preventDefault();
  }
}

// $('.button').on('click', function(event){
//   var type = $(this).data('type');
//   var status = $(this).data('status');
  
//   $('.button').removeClass('is-active');
//   $(this).addClass('is-active');
  
//   $('.notify')
//     .removeClass()
//     .attr('data-notification-status', status)
//     .addClass(type + ' notify')
//     .addClass('do-show'); 
  
//   event.preventDefault();
// })


