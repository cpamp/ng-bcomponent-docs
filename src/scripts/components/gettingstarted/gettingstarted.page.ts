import {Component} from '@angular/core';
import {JumbotronBComponent, HeadingBComponent} from 'ng-bcomponents';
import {ContentComponent} from '../content.component';
import {HighlightDirective} from '../../directives/highlight';

@Component({
    templateUrl: 'gettingstarted.page.html',
    directives: [
        HighlightDirective,
        JumbotronBComponent,
        HeadingBComponent
    ],
    inputs: []
})
export class GettingStartedPage {

}