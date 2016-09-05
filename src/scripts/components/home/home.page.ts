import {Component} from '@angular/core';

@Component({
    templateUrl: 'home.page.html',
    inputs: []
})
export class HomePage {
    public code = {
        modal:
`<modal-bcomponent #demoModal>
    <div modal-title>Modal Demo</div>
    <div modal-body>Modals sure are simple with ng-bcomponents!</div>
    <div modal-footer>
        <button-bcomponent text="OK" type="primary" [click]="demoModal.close"></button-bcomponent>
        <button-bcomponent text="Cancel" type="default" [click]="demoModal.close"></button-bcomponent>
    </div>
</modal-bcomponent>`
    }
}