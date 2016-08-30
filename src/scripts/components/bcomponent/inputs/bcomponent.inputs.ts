import {Component} from '@angular/core';
import {ContentComponent} from '../../content.component';
import {HeadingBComponent, TableBComponent} from 'ng-bcomponents';

@Component({
    templateUrl: 'bcomponent.inputs.html',
    directives: [HeadingBComponent, TableBComponent, ContentComponent],
    inputs: []
})
export class BComponentInputs {
    public inputItems = [
        {
            Name: 'id',
            Type: 'string',
            Description: 'The id attribute for the element'
        },
        {
            Name: 'classes',
            Type: 'string',
            Description: 'Classes to apply to the element'
        },
        {
            Name: 'styles',
            Type: 'string',
            Description: 'Styles to apply to the element'
        },
        {
            Name: 'name',
            Type: 'string',
            Description: 'The name attribute for the element'
        },
        {
            Name: 'aria',
            Type: 'string',
            Description: 'The aria attribute for the element'
        },
        {
            Name: 'ariaBy',
            Type: 'string',
            Description: 'The aria-labeled-by attribute for the element'
        },
        {
            Name: 'bcomponent',
            Type: 'any',
            Description: 'Sets the bcomponent to the object passed, use this to intialize bcomponents programmatically'
        }
    ];
}