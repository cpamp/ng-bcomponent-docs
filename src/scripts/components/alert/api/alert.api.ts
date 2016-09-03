import {Component} from '@angular/core';
import {HeadingBComponent} from 'ng-bcomponents';
import {HighlightDirective} from '../../../directives/highlight';
import {} from '../../content.component';

@Component({
    selector: '',
    templateUrl: 'alert.api.html',
    directives: [HeadingBComponent, HighlightDirective],
    inputs: []
})
export class AlertApi {
    public code = {
        initialize:
`public Initialize: (text: string = "", 
    dismissible: boolean = false, 
    hidden: boolean = false, 
    type: DisplayType = "success") => AlertBComponent`
    }
}