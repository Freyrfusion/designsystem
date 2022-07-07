import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navigations',
  templateUrl: './navigations.component.html',
  styleUrls: ['./navigations.component.scss']
})
export class NavigationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
