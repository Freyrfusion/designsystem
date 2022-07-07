import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent implements OnInit {
  commontablist:any;
  selectedList:any;
  copyToClipboard:any;
  copytxt: any;
  i:any;
  constructor(public _common:CommonService, public _copy:CopyserviceService) { }

  ngOnInit(): void {
    this.commontablist=this._common.ngtabList();
    this.selectedList = 0;
    this.copyToClipboard=this._copy.copyToClipboard;
    this.copytxt = this._copy.copytxt;

  

   
  }
  accordionTabs(i:any){
    var acc = $(".accordion");
 
    for (i = 0; i < acc.length; i++) {
   //   alert(acc.innerText);
    acc[i].addEventListener("click", function() {

       this.classList.toggle("active");
      // alert(acc[i]);
        var panel = this.nextElementSibling;
        
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
     });
    }
  }
  openTabList(commontablist:any){
    this.selectedList = commontablist;

  }

}
