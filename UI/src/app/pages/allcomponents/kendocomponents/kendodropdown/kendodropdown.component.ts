import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';

@Component({
  selector: 'app-kendodropdown',
  templateUrl: './kendodropdown.component.html',
  styleUrls: ['./kendodropdown.component.scss']
})
export class KendodropdownComponent implements OnInit {
  commontablist:any;
  selectedList:any;
  copyToClipboard:any;
  copytxt: any;
  constructor(public _common:CommonService, public _copy:CopyserviceService) { }
  public modal:any
  public defaultItem: { Name: string; Id: number } = { Name: "-- Select --", Id: null };
  public impurities: any[] = [{ Name: "Yes", Id: 1 }, { Name: "No", Id: 0 }];
  


  ngOnInit(): void {
    this.modal=1;
    this.commontablist=this._common.ngtabList();
    this.selectedList = 0;
    this.copyToClipboard=this._copy.copyToClipboard;
    this.copytxt = this._copy.copytxt;
  }
  openTabList(commontablist:any){
    this.selectedList = commontablist;

  }

}
