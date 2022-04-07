import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sass-angular';
  searchedKeyword: string;

  blogPost: AppComponent;
  tabLists = ['Details','Source Code','How to Use']
  selectedList:any;

  constructor(private router: Router) { 
    let theme = Theme.Green;
  }
 // copy(text: string){
   // this._clipboardService.copy(text);
    // let listener = (e: ClipboardEvent) => {
    //   e.clipboardData.setData('text/plain', (text));
    //   e.preventDefault();
    // };
    // document.addEventListener('copy', listener);
    // document.execCommand('copy');
    // document.removeEventListener('copy', listener);
 //}

  
  
  ngOnInit(): void  {
    this.selectedList = this.tabLists[0];
    
    
  }
 

 
  openTabList(tabList:any){
    this.selectedList = tabList;
    //this.prismjsService.highlightAll();
    
  }
  

  loadTabComponent(value: any) {

  }
  
 
  
SearchFunction() {

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
 
  filter = input.value.toUpperCase();

  let menu = document.getElementById('dynamic-tabs');
 // let children = menu.children;
 // console.log(children);
  
  table =  document.querySelectorAll(".dynamic-tabs");
 // table = document.getElementsByClassName("dynamic-tabs");

  //tr = table.getElementsByTagName("li");
 tr = menu.children;

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("a")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
enum Theme{
  Blue="blue",
  Green="green",
  Dark="dark"
  }