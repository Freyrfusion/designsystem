import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Component({
  selector: 'prism, [prism]',
  template: '<ng-content></ng-content>',
  styles: [`
    :host.dark {
      background: #333;
      color: #FFF;
      padding: 8px;
    }`
  ]
})
export class PrismComponent implements AfterViewInit {

  @Input() code: string;
  @Input() language = 'javascript';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    let code = (this.code || this.el.nativeElement.innerText)
    code = this.fixIndent(code);
    const grammar = Prism.languages[this.language];
    const html = Prism.highlight(code, grammar, this.language);
    this.el.nativeElement.innerHTML = html;
  }

  private fixIndent(code) {
    const removeThis = (code.match(/^([ ]+)/) || [])[1];
    if (removeThis) {
      const re = new RegExp(`^${removeThis}`, 'gm')
      return code.replace(re, '');
    }
    return code;
  }

}
