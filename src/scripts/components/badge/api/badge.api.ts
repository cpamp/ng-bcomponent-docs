import {Component} from '@angular/core';

@Component({
    selector: '',
    templateUrl: 'badge.api.html',
    inputs: []
})
export class BadgeApi {
    public code = {
        initialize:
`public Initialize: (value: number = 0) => BadgeBComponent`,

        setValue:
`public setValue: (value: number) => void`,

        increment:
`public increment: (by: number = 1) => void`,

        decrement:
`public decrement: (by: number = 1) => void`
    }
}