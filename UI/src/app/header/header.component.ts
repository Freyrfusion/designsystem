import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
  
export class HeaderComponent implements OnInit {

  constructor() { 
   
  
  }

  ngOnInit(): void {
    let style = localStorage.getItem('style');
    if (style == null) {
      $('body').addClass("light");
    } else {
      $('body').addClass(style);
    }
 }
 
setTheme(theme) {
 
  if (theme == 'light') {
    $('body').removeAttr('class');
    $('body').attr('class', '');
    $('body').toggleClass("light");
  } else if (theme == 'blue') {
    $('body').removeAttr('class');
    $('body').attr('class', '');
    $('body').toggleClass("blue");
  } else if (theme == 'green') {
    $('body').removeAttr('class');
    $('body').attr('class', '');
    $('body').toggleClass("green");
  } else if (theme == 'dark') {
    $('body').removeAttr('class');
    $('body').attr('class', '');
    $('body').toggleClass("dark");
  }
  localStorage.setItem('style', theme);
}
}