import {NgModule, enableProdMode} from '@angular/core';
enableProdMode();
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app.component';
import {routing} from './app.routes';
import {HomePage} from './components/home/home.page';
import {GettingStartedPage} from './components/gettingstarted/gettingstarted.page';
import {BComponentInputs} from './components/bcomponent/inputs/bcomponent.inputs';
import {BComponentApi} from './components/bcomponent/api/bcomponent.api';
import {AlertApi} from './components/alert/api/alert.api';

@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        GettingStartedPage,
        BComponentInputs,
        BComponentApi,
        AlertApi
    ],
    imports: [BrowserModule, routing],
    entryComponents: [
        HomePage,
        GettingStartedPage,
        BComponentInputs,
        BComponentApi,
        AlertApi
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}