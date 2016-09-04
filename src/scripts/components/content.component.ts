import {Component} from '@angular/core';

@Component({
    selector: 'content-component',
    templateUrl: 'content.component.html',
    directives: [],
    inputs: []
})
export class ContentComponent {

    ngAfterViewInit() {
        $(".content-container").mCustomScrollbar({
            theme: 'minimal-dark',
            scrollInertia: 0
        });
    }

}