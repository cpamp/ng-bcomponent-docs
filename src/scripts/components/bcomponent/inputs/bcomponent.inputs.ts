import {Component} from '@angular/core';

@Component({
    templateUrl: 'bcomponent.inputs.html',
    inputs: []
})
export class BComponentInputs {

    public code = {
        overview:
`<bc-some-component
    [id]
    [classes]
    [styles]
    [name]
    [aria]
    [ariaBy]
    [bcomponent]></bc-some-component>`,

        id: 
`<bc-some-component id="my-id"></bc-some-component>
<bc-some-component [id]="myIdVariable"></bc-some-component>`,

        classes:
`<bc-some-component classes="class1 class2 container"></bc-some-component>
<bc-some-component [classes]="myClassesVariable"></bc-some-component>`,

        styles:
`<bc-some-component styles="height:5px;width:10px;"></bc-some-component>
<bc-some-component [styles]="myStylesVariable"></bc-some-component>`,

        name:
`<bc-some-component name="email"></bc-some-component>
<bc-some-component [name]="myNameVariable"></bc-some-component>`,

        aria:
`<bc-some-component aria="Go"></bc-some-component>
<bc-some-component [aria]="myAriaVariable"></bc-some-component>`,

        ariaBy:
`<bc-some-component ariaBy="LabelledBy"></bc-some-component>
<bc-some-component [ariaBy]="myAriaByVariable"></bc-some-component>`,

        bcomponent:
`<bc-some-component [bcomponent]="codeInitializedBcomponent"></bc-some-component>`
    }

}