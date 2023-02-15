import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[vcrAnchor]',
})
export class VCRAnchorDirective {
  constructor(
    public viewContainerRef: ViewContainerRef
  ) {}
}