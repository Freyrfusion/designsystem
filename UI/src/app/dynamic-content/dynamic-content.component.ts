
import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';


import { isNullOrUndefined } from 'util';
//Foundation Components
import { ColorsComponent } from 'src/app/components/colors/colors.component';
import { TypographyComponent } from 'src/app/components/typography/typography.component';
import { IconsComponent } from '../components/icons/icons.component';
import { PrimitivesComponent } from '../components/primitives/primitives.component';
//UI Components
import { ButtonsComponent } from 'src/app/components/buttons/buttons.component';
import { NavigationsComponent } from 'src/app/components/navigations/navigations.component';
import { TooltipsComponent } from './../components/tooltips/tooltips.component';
import { CheckboxsComponent } from './../components/checkboxs/checkboxs.component';
import { FormsComponent } from './../components/forms/forms.component';
import { TabsComponent } from './../components/tabs/tabs.component';
import { ModalsComponent } from './../components/modals/modals.component';
import { AlertsComponent } from './../components/alerts/alerts.component';


import { UicomponentTabsDirective } from './../uicomponent-tabs.directive';
@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.scss']
})

export class DynamicContentComponent implements OnInit {
  
  _component: any;
  componentsList = [];
  
  @ViewChild(UicomponentTabsDirective) tabHost: UicomponentTabsDirective;
  constructor(
      private viewContainerRef: ViewContainerRef,
      private componentFactoryResolver: ComponentFactoryResolver,
      private router: Router,
  ) { }
  // constructor(
  //   private router: Router,
  // ) {}

  ngOnInit(): void {
     // Default loaded Tab
   
   // this.loadTabComponent("colors");
  }
 
  loadTabComponent(_selectedTab: string ) {

  



    //var alltabs = document.getElementsByClassName("dynamic-tabs");

 
  //   let dynamictabs = document.getElementById('dynamic-tabs');
  //   activemenu = dynamictabs.children;
  //   console.log(activemenu);
  //   if(!activemenu.classList.contains('activetab')){
  //     activemenu.classList.remove("activetab")
  //   }
    // remove loaded Component
   
    if (!isNullOrUndefined(this.componentsList)) {
      this.componentsList.map((cm, i) => {
        let tmp = this.viewContainerRef;
       // this.viewContainerRef.remove(this.viewContainerRef.indexOf(cm));
        this.viewContainerRef.remove(i);
        this.componentsList.splice(i, 1);
      });
    }
   
   // var activetabs = document.getElementsByClassName("activetab"); 
    var currenttab = _selectedTab;
    var gettabparent = document.getElementById(currenttab);
    var getactivetabs = document.getElementsByClassName("activetab")[0];
    if(typeof getactivetabs =='undefined'){
     
      gettabparent.className == "activetab";
    }
    else{
      getactivetabs.classList.remove("activetab");
      gettabparent.className == "activetab";
    }
   
   
       // Loop through the buttons and add the active class to the current/clicked button
    
  
    
    this._component = "";
    if (_selectedTab == "colors")
      this._component = ColorsComponent;    
      else if (_selectedTab == "icons")
      this._component = IconsComponent;
      else if (_selectedTab == "primitives")
      this._component = PrimitivesComponent;
      else if (_selectedTab == "typography")
      this._component = TypographyComponent;
    else if (_selectedTab == "navigations")
      this._component = NavigationsComponent;
      else if (_selectedTab == "buttons")
      this._component = ButtonsComponent;
      else if (_selectedTab == "alerts")
      this._component = AlertsComponent;
      else if (_selectedTab == "modals")
      this._component = ModalsComponent;
      else if (_selectedTab == "tabs")
      this._component = TabsComponent;
      else if (_selectedTab == "forms")
      this._component = FormsComponent;
      else if (_selectedTab == "checkboxs")
      this._component = CheckboxsComponent;
      else if (_selectedTab == "tooltips")
      this._component = TooltipsComponent;
      gettabparent.classList.add("activetab");
    this.viewContainerRef.detach();
    this.viewContainerRef.clear();
  
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this._component);
   
    this.viewContainerRef = this.tabHost.viewContainerRef;
  
    let componentRef = this.viewContainerRef.createComponent(componentFactory);
    this.componentsList.push(componentRef);

   
   

    // for (var i = 0; i < btns.length; i++) {
     
    //   btns[i].addEventListener("click", function() {
    //     var current = document.getElementsByClassName("activetab")[0];
    //     if (current.classList.contains('activetab')) {
    //       // do some stuff
    //       alert("yes");
    //       current.classList.remove("activetab");
    //   }
    //   else{
    //     alert("no");
    //     this.className += " activetab";
    //   }

    //   });
    // }

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
  /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof MyComponent
   */
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
  // constructor() { }

  // ngOnInit(): void {
  // }

}
