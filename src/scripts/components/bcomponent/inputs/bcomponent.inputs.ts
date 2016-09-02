import {Component} from '@angular/core';
import {ContentComponent} from '../../content.component';
import {HeadingBComponent, TableBComponent} from 'ng-bcomponents';

@Component({
    templateUrl: 'bcomponent.inputs.html',
    directives: [HeadingBComponent, TableBComponent, ContentComponent],
    inputs: []
})
export class BComponentInputs {}