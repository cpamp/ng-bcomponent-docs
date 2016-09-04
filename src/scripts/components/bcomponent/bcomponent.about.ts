import {Component} from '@angular/core';
import {ContentComponent} from '../content.component';
import {HeadingBComponent, LinkBComponent} from 'ng-bcomponents';

@Component({
    selector: '',
    templateUrl: 'bcomponent.about.html',
    directives: [ContentComponent, HeadingBComponent, LinkBComponent],
    inputs: []
})
export class BComponentAbout {

}