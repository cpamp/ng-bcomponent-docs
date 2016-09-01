import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SidenavBComponent, SidenavDropdownItem, SidenavItem} from 'ng-bcomponents';
import {LinkBComponent} from 'ng-bcomponents';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, SidenavBComponent]
})
export class AppComponent {
    public navItems = [
        new SidenavItem(new LinkBComponent().Initialize("Home", "/home", true)),
        new SidenavItem(new LinkBComponent().Initialize("Getting Started", "/getting-started", true)),
        new SidenavItem(null, 'BComponent (base)', [
            new SidenavDropdownItem(new LinkBComponent().Initialize('Inputs', '/bcomponent/inputs', true)),
            new SidenavDropdownItem(new LinkBComponent().Initialize('API', '/bcomponent/api'))
        ]),
        new SidenavItem(null, 'Alert', [
            new SidenavDropdownItem(new LinkBComponent().Initialize('Inputs', '/alert/inputs', true)),
            new SidenavDropdownItem(new LinkBComponent().Initialize('API', '/alert/api', true)),
            new SidenavDropdownItem(new LinkBComponent().Initialize('Usage', '/alert/usage', true))
        ])
    ];
}