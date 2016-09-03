import {Component} from '@angular/core';
import {ContentComponent} from '../../content.component';
import {HeadingBComponent, TableBComponent} from 'ng-bcomponents';

@Component({
    templateUrl: 'bcomponent.inputs.html',
    directives: [HeadingBComponent, TableBComponent, ContentComponent],
    inputs: []
})
export class BComponentInputs {

    public code = {
        overview:
`<some-bcomponent
    [id]
    [classes]
    [styles]
    [name]
    [aria]
    [ariaBy]
    [bcomponent]></some-bcomponent>`,

        id: 
`<some-bcomponent id="my-id"></some-bcomponent>
<some-bcomponent [id]="myIdVariable"></some-bcomponent>`,

        classes:
`<some-bcomponent classes="class1 class2 container"></some-bcomponent>
<some-bcomponent [classes]="myClassesVariable"></some-bcomponent>`,

        styles:
`<some-bcomponent styles="height:5px;width:10px;"></some-bcomponent>
<some-bcomponent [styles]="myStylesVariable"></some-bcomponent>`,

        name:
`<some-bcomponent name="email"></some-bcomponent>
<some-bcomponent [name]="myNameVariable"></some-bcomponent>`,

        aria:
`<some-bcomponent aria="Go"></some-bcomponent>
<some-bcomponent [aria]="myAriaVariable"></some-bcomponent>`,

        ariaBy:
`<some-bcomponent ariaBy="LabelledBy"></some-bcomponent>
<some-bcomponent [ariaBy]="myAriaByVariable"></some-bcomponent>`,

        bcomponent:
`<some-bcomponent [bcomponent]="codeInitializedBcomponent"></some-bcomponent>`
    }

}