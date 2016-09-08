import {Component} from '@angular/core';

@Component({
    selector: '',
    templateUrl: 'alert.inputs.html',
    inputs: []
})
export class AlertInputs {
    public code = {
        overview:
`<bc-alert
    [text]
    [dismissible]
    [hidden]
    [type]`,

        text: 
`<bc-alert text="My Alert"></bc-alert>
<!-- ng-content alternative -->
<bc-alert><b>Ng-Content alert</b> Wow!</bc-alert>`,

        dismissible: `<bc-alert [dismissible]="true"></bc-alert>`,

        hidden: `<bc-alert [hidden]="true"></bc-alert>`,

        type: `<bc-alert type="success"></bc-alert>`
    }
}