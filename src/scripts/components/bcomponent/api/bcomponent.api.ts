import {Component, ViewChild} from '@angular/core';
import {LabelBComponent} from 'ng-bcomponents';

@Component({
    templateUrl: 'bcomponent.api.html',
    inputs: []
})
export class BComponentApi {
    @ViewChild('lblFadeTo') lblFadeTo: LabelBComponent;
    public fadeTo = () => {
        this.lblFadeTo.fadeTo(400, 0.5);
    }
}