import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sass-angular';
  searchedKeyword: string;

  constructor(
    private router: Router,
   
  //  private router: Router
  ) { 
    let theme = Theme.Green;
    //document.body.classList.add(theme);
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