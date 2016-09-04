import {Component} from '@angular/core';
import {ContentComponent} from '../content.component';
import {HeadingBComponent, LinkBComponent} from 'ng-bcomponents';

@Component({
    selector: '',
    templateUrl: 'alert.about.html',
    directives: [ContentComponent, HeadingBComponent, LinkBComponent],
    inputs: []
})
export class AlertAbout {

}