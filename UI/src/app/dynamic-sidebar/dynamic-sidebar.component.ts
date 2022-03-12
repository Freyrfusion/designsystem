import { Component, OnInit, OnDestroy, Input, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';



//Dynamic Sidebars
@Component({
  selector: 'app-dynamic-sample-1',
  template: `<div>Dynamic sample 2</div>`
})
export class DynamicSample1Component {}

@Component({
  selector: 'app-dynamic-sample-2',
  template: `<div>Dynamic sample 2</div>`
})
export class DynamicSample2Component {}

@Component({
  selector: 'app-unknown-component',
  template: `<div>Unknown component</div>`
})
export class UnknownDynamicComponent {}



@Component({
  selector: 'app-dynamic-sidebar',
  templateUrl: './dynamic-sidebar.component.html',
  styleUrls: ['./dynamic-sidebar.component.scss']
})


export class DynamicSidebarComponent implements OnInit, OnDestroy {
 
  private componentRef: ComponentRef<{}>;

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  @Input()
  type: string;

  private mappings = {
    'sample1': DynamicSample1Component,
    'sample2': DynamicSample2Component
  };

  getComponentType(typeName: string) {
    const type = this.mappings[typeName];
    return type || UnknownDynamicComponent;
  }
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    if (this.type) {
      const componentType = this.getComponentType(this.type);
      const factory = this.resolver.resolveComponentFactory(componentType);
      
      this.componentRef = this.container.createComponent(factory);
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

}