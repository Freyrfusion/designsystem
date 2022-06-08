import { Component, OnInit, ViewChild } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { TooltipDirective } from '@progress/kendo-angular-tooltip';
import { CommonService } from 'src/app/services/common.service';
import { CopyserviceService } from 'src/app/services/copy/copyservice.service';

@Component({
  selector: 'app-kendotable',
  templateUrl: './kendotable.component.html',
  styleUrls: ['./kendotable.component.scss']
})
export class KendotableComponent implements OnInit {
  commontablist:any;
  selectedList:any;
  copyToClipboard:any;
  copytxt: any;
  // tooltipDir: any;
  constructor(public _common:CommonService, public _copy:CopyserviceService) { }
  
  @ViewChild(TooltipDirective) public tooltipDir: TooltipDirective;
  public showTooltip(e: MouseEvent): void {
    const element = e.target as HTMLElement;
    if ((element.nodeName === 'TD' || element.nodeName === 'TH' || element.nodeName === 'SPAN')
       && element.offsetWidth < element.scrollWidth) {
      this.tooltipDir.toggle(element);
    } 
    else {
      this.tooltipDir.hide();
    }
  }
  
  public data: any[] = [
    {
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'ILA',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
     
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'ILS',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
     
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FSS',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FSA',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
     
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FSN',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
     
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FMC',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'ILA',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
     
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'ILS',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FSS',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FSA',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FSN',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FMC',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'Draft',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'ILA',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
     
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'ILS',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FSS',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FSA',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FSN',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
     
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'FMC',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'Draft',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'Draft',
      StatusClass: '',
      Actions: 'Edit',
    },
    {
      
      ProductName: 'Face mask',
      ProductCategory: 'Skin care',
      FormulationReferenceNumber: 125367785,
      Markets: 'Austral, India, UK,',
      Status: 'Draft',
      StatusClass: '',
      Actions: 'Edit',
    },
  ];
  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;

  private items: any[] = this.data;
  ngOnInit(): void {
    this.commontablist=this._common.ngtabList();
    this.selectedList = 0;
    this.copyToClipboard=this._copy.copyToClipboard;
    this.copytxt = this._copy.copytxt;
    this.loadItems()
  }
  openTabList(commontablist:any){
    this.selectedList = commontablist;

  }
  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {


    this.items.forEach(element => {
      if(element.Status === 'Draft'){
        element.StatusClass = 'draft_Status'; 
      } else if(element.Status === 'New'){
        element.StatusClass = 'badge-primary'; 
      } else if(element.Status === 'Pending'){
        element.StatusClass = 'badge-primary'; 
      } 
    });
    this.gridView = {
      data: this.items.slice(this.skip, this.skip + this.pageSize),
      total: this.items.length,
    };
  }

}


