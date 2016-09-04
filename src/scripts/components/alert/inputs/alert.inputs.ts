import {Component} from '@angular/core';
import {HighlightDirective} from '../../../directives/highlight';
import {ContentComponent} from '../../content.component';

@Component({
    selector: '',
    templateUrl: 'alert.inputs.html',
    directives: [HighlightDirective, ContentComponent],
    inputs: []
})
export class AlertInputs {
    public code = {
        overview:
`<alert-bcomponent
    [text]
    [dismissible]
    [hidden]
    [type]`,

        text: 
`<alert-bcomponent text="My Alert"></alert-bcomponent>
<!-- ng-content alternative -->
<alert-bcomponent><b>Ng-Content alert</b> Wow!</alert-bcomponent>`,

        dismissible: `<alert-bcomponent [dismissible]="true"></alert-bcomponent>`,

        hidden: `<alert-bcomponent [hidden]="true"></alert-bcomponent>`,

        type: `<alert-bcomponent type="success"></alert-bcomponent>`
    }
}