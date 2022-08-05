import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';
@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss']
})
export class NavigationsComponent implements OnInit {
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

    $('.sidebar-menu').on('mouseover', function (event) {
      event.preventDefault();
      event.stopPropagation();
      var thisclass = $('.sidebar-navigation').attr('class');
      var menustatu = localStorage.getItem('menustate');
      $('.sidebar-navigation').addClass('sidebar-collapse');
    })

    $('.sidebar-menu').on('mouseout', function (event) {
      var thisclass = $('.sidebar-navigation').attr('class');
      // $('.sidebar').removeClass('sidebar-collapse'); 
      var menustatu: any = localStorage.getItem('menustate');
      if (menustatu != 1) {
        $('.sidebar-navigation').removeClass('sidebar-collapse');
      }
    })
    $('.menuSticky').click(function (event) {
      $('.main-content').toggleClass('off-canvas');
      $('.sidebar-navigation').toggleClass('sidebar-collapse');
      var menustatu: any = localStorage.getItem('menustate');
      if (menustatu == 1) {
        $('.menuSticky').addClass('icon-right-open').removeClass('icon-left-open');

        localStorage.removeItem('menustate');

      }
      else {
        localStorage.setItem('menustate', "1");
        $('.sidebar-navigation').addClass('sidebar-collapse');
        $('.menuSticky').removeClass('icon-right-open').addClass('icon-left-open');
      }
    });
    $('#selMenu').on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
    })
    $('.page-content-wrapper').on('mouseover', function (event) {
      var menustatu: any = localStorage.getItem('menustate');
      if (menustatu != 1) {
        // console.log('New enven')
        $('li').removeClass('submenu-collapse');
      }
    })
    $(document).on('load', this.menustate());
    $('.arrow').on('click', function (event) {
      // alert("this is testinh,..")
      $(this).siblings().removeClass('submenu-collapse');
      $(this).toggleClass('submenu-collapse');
      $(this).attr('id', 'selMenu');
      var thisid = $(this).attr('id', 'selMenu');
      var thiscls = $(this).attr('class');
    })
    $('.logOut').click(function (event) {
      localStorage.removeItem('menustate');
    });
    
    
  }
  openTabList(commontablist:any){ 
    this.selectedList = commontablist; 
   }
   openTabList1(commontablist1:any){ 
    this.selectedList1 = commontablist1; 
   }
   
  menustate(): any {
    var menustatu: any = localStorage.getItem('menustate');
    console.log("menustatu: " + menustatu);
    if (menustatu == 1) {
      $('.sidebar-navigation').addClass('sidebar-collapse');
      $('.main-content').addClass('off-canvas');
    }
    else {
      $('.sidebar-navigation').removeClass('sidebar-collapse');
      $('.main-content').removeClass('off-canvas');
    }

  }

 
   
  
  
}
