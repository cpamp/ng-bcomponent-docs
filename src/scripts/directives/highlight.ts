import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {
    constructor(private eltRef: ElementRef) {
    }

    ngAfterViewInit() {
        hljs.highlightBlock(this.eltRef.nativeElement);
    }
}