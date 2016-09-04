import {Component} from '@angular/core';
import {HighlightDirective} from '../../../directives/highlight';
import {ContentComponent} from '../../content.component';

@Component({
    selector: '',
    templateUrl: 'alert.api.html',
    directives: [HighlightDirective, ContentComponent],
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