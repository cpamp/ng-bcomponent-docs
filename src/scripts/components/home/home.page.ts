import {Component} from '@angular/core';
import {JumbotronBComponent, HeadingBComponent} from 'ng-bcomponents';

@Component({
    templateUrl: 'home.page.html',
    directives: [
        JumbotronBComponent,
        HeadingBComponent
    ],
    inputs: []
})
export class HomePage {

}