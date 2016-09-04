import {Component} from '@angular/core';
import {ContentComponent} from '../content.component';
import {HighlightDirective} from '../../directives/highlight';

@Component({
    templateUrl: 'home.page.html',
    directives: [HighlightDirective],
    inputs: []
})
export class HomePage {

}