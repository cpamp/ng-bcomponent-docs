import {Component} from '@angular/core';
import {JumbotronBComponent, HeadingBComponent} from 'ng-bcomponents';
import {ContentComponent} from '../content.component';

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