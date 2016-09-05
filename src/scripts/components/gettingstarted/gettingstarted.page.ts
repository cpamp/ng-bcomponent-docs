import {Component} from '@angular/core';

@Component({
    templateUrl: 'gettingstarted.page.html',
    inputs: []
})
export class GettingStartedPage {
    public code = {
        systemJS:
`var map = {
    // Your other libraries here
    'ng-bcomponents':                'node_modules/ng-bcomponents'
};
var packages = {
    // Your other libraries here
    'ng-bcomponents':                { main: 'index.js', defaultExtension: 'js' }
};
var config = {
    map: map,
    packages: packages,
    defaultJSExtensions: true
};
System.config(config);`,
        appModule:
`import {NgBComponentsModule} from 'ng-bcomponents';
@NgModule({
    imports: [NgBComponentsModule]
})
export class AppModule {}`
    }
}