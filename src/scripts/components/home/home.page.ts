import {Component} from '@angular/core';
import {HeadingBComponent, ButtonBComponent, ModalBComponent} from 'ng-bcomponents';
import {ContentComponent} from '../content.component';
import {HighlightDirective} from '../../directives/highlight';

@Component({
    templateUrl: 'home.page.html',
    directives: [
        HighlightDirective,
        HeadingBComponent,
        ButtonBComponent,
        ModalBComponent
    ],
    inputs: []
})
export class HomePage {

}