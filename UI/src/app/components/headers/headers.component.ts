import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    $(document).ready(function(){
      $('.header-profile-section').click(function() {
        $('.profile-dropdown-content').slideToggle('slow');
      });
    });
    $(document).ready(function(){
      $('.header-notification-section').click(function() {
        $('.notification-dropdown-content').slideToggle('slow');
      });
    });
    $(document).ready(function(){
      $('.header-notification-section').click(function() {
        // alert("test1");
        $('.profile-dropdown-content').hide();
      });
      $('.header-profile-section').click(function() {
        // alert("test2");
        $('.notification-dropdown-content').hide();
      });
    });
    $(document).on("click", function(event){
      var $trigger = $(".header-notification-section,.header-profile-section");
      if($trigger !== event.target && !$trigger.has(event.target).length){
          $(".profile-dropdown-content, .notification-dropdown-content").slideUp("fast");
      }            
  });
    

  }
  
}
