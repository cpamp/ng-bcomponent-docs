import {NgModule, enableProdMode} from '@angular/core';
enableProdMode();
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app.component';
import {routing} from './app.routes';
import {HomePage} from './components/home/home.page';
import {GettingStartedPage} from './components/gettingstarted/gettingstarted.page';
import {BComponentInputs} from './components/bcomponent/inputs/bcomponent.inputs';

@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        GettingStartedPage,
        BComponentInputs
    ],
    imports: [BrowserModule, routing],
    entryComponents: [
        HomePage,
        GettingStartedPage,
        BComponentInputs
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}