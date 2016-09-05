import {NgModule, enableProdMode} from '@angular/core';
enableProdMode();

import {ContentComponent} from './components/content.component';
import {HighlightDirective} from './directives/highlight';

import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app.component';
import {routing} from './app.routes';
import {HomePage} from './components/home/home.page';
import {GettingStartedPage} from './components/gettingstarted/gettingstarted.page';
import {BComponentAbout} from './components/bcomponent/bcomponent.about';
import {BComponentInputs} from './components/bcomponent/inputs/bcomponent.inputs';
import {BComponentApi} from './components/bcomponent/api/bcomponent.api';
import {AlertAbout} from './components/alert/alert.about';
import {AlertInputs} from './components/alert/inputs/alert.inputs';
import {AlertApi} from './components/alert/api/alert.api';
import {NgBComponentsModule} from 'ng-bcomponents';

var pages = [
    HomePage,
    GettingStartedPage,
    BComponentAbout,
    BComponentApi,
    BComponentInputs,
    AlertAbout,
    AlertApi,
    AlertInputs
];

@NgModule({
    declarations: [
        ContentComponent,
        HighlightDirective,
        AppComponent,
        ...pages
    ],
    imports: [BrowserModule, routing, NgBComponentsModule],
    entryComponents: [
        ...pages
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}