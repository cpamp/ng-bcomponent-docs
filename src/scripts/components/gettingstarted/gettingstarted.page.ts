import {Component} from '@angular/core';
import {ContentComponent} from '../content.component';
import {HighlightDirective} from '../../directives/highlight';

@Component({
    templateUrl: 'gettingstarted.page.html',
    directives: [HighlightDirective, ContentComponent],
    inputs: []
})
export class GettingStartedPage {

}