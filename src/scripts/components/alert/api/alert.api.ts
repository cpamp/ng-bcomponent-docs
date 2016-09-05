import {Component} from '@angular/core';

@Component({
    selector: '',
    templateUrl: 'alert.api.html',
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