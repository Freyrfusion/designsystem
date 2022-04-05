import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { 
    
  }
  
  ngtabList(){
    //let tabarray = ['Details','Source Code', 'How to Use'];
    return ['Details','Source Code', 'How to Use'];

  }

}
