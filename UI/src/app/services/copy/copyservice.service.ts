import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopyserviceService {
  copytxt: string = "Copy";
  constructor() { }

  copyToClipboard(el: HTMLDivElement, event:any) {
   
   // let target = event.target.innerText;
  
    if (navigator.clipboard) {
      navigator.clipboard.writeText(el.innerText).then(() => {
     // this.copytxt = "Copied";
      event.target.textContent  = "Copied to Clipboard";
     }, (error) => {
        console.log(error)
      });
    } else {
      console.log('Browser do not support Clipboard API')
    }
  
  }
}
