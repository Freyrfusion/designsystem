import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-kendotable',
  templateUrl: './kendotable.component.html',
  styleUrls: ['./kendotable.component.scss']
})
export class KendotableComponent implements OnInit {

  constructor() { }
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
    this.loadItems()
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
