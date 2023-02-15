import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { VCRAnchorDirective } from './vcrAnchor.directive';
import { MyGridComponent } from './myGrid.component';

@Component({
    selector: 'my-app',
    template: `

        <kendo-grid
            [data]="mydata"
            [pageSize]="1"
            [pageable]="true"
            [navigable]="true">
            <kendo-column field="note"></kendo-column>
         </kendo-grid>

         <button (click)="clickHandler()">dynamically create a component with a grid</button>
         <ng-template vcrAnchor></ng-template>
        `
})

export class AppComponent {

    @ViewChild(VCRAnchorDirective) vcrAnchor: VCRAnchorDirective;
    public mydata=[{note:'this grid has pagable and navigable set to true, and this combination appears to affect the dynamically created grid when you click the button below.'}];
    constructor(
         private componentFactoryResolver: ComponentFactoryResolver
    ) {
    }



    public clickHandler() {
        const myGridComponentFactory = this.componentFactoryResolver.resolveComponentFactory(MyGridComponent);
        const viewContainerRef = this.vcrAnchor.viewContainerRef;
        viewContainerRef.clear();
        viewContainerRef.createComponent(myGridComponentFactory);
    }
}
