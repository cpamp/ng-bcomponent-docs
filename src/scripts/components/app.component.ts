import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SidenavDropdownItem, SidenavItem} from 'ng-bcomponents';
import {LinkBComponent} from 'ng-bcomponents';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    public navItems = [
        new SidenavItem(null, 'Get ng-bcomponents', [
            new SidenavDropdownItem(new LinkBComponent().Initialize('GitHub', 'https://github.com/cpamp21/ng-bcomponents')),
            new SidenavDropdownItem(new LinkBComponent().Initialize('npm', 'https://www.npmjs.com/package/ng-bcomponents'))
        ]),
        new SidenavItem(new LinkBComponent().Initialize("Home", "/home", true)),
        new SidenavItem(new LinkBComponent().Initialize("Getting Started", "/getting-started", true)),
        new SidenavItem(null, 'BComponent (base)', [
            new SidenavDropdownItem(new LinkBComponent().Initialize('About', '/bcomponent', true)),
            new SidenavDropdownItem(new LinkBComponent().Initialize('API', '/bcomponent/api', true)),
            new SidenavDropdownItem(new LinkBComponent().Initialize('Inputs', '/bcomponent/inputs', true))
        ]),
        new SidenavItem(null, 'Alert', [
            new SidenavDropdownItem(new LinkBComponent().Initialize('About', '/alert', true)),
            new SidenavDropdownItem(new LinkBComponent().Initialize('API', '/alert/api', true)),
            new SidenavDropdownItem(new LinkBComponent().Initialize('Inputs', '/alert/inputs', true))
        ]),
        new SidenavItem(null, 'Badge', [
            new SidenavDropdownItem(new LinkBComponent().Initialize('About', '/badge', true)),
            new SidenavDropdownItem(new LinkBComponent().Initialize('API', '/badge/api', true)),
            new SidenavDropdownItem(new LinkBComponent().Initialize('Inputs', '/badge/inputs', true))
        ])
    ];
}