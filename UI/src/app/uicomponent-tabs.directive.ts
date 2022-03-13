import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[active-tab]'
})
export class UicomponentTabsDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
