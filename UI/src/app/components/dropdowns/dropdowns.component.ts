import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
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

 
  


}
