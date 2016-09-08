import {Component} from '@angular/core';

@Component({
    templateUrl: 'home.page.html',
    inputs: []
})
export class HomePage {
    public code = {
        modal:
`<bc-modal #demoModal>
    <bc-modal-title>Modal Demo</bc-modal-title>
    <bc-modal-body>Modals sure are simple with ng-bcomponents!</bc-modal-body>
    <bc-modal-footer>
        <bc-button text="OK" type="primary" (onClick)="demoModal.close()"></bc-button>
        <bc-button text="Cancel" type="default" (onClick)="demoModal.close()"></bc-button>
    </bc-modal-footer>
</bc-modal>`
    }
}