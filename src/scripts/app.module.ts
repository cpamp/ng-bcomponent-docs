import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app.component';
import {routing} from './app.routes';
import {HomePage} from './components/home/home.page';
import {BComponentInputs} from './components/bcomponent/inputs/bcomponent.inputs';

@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        BComponentInputs
    ],
    imports: [BrowserModule, routing],
    entryComponents: [
        HomePage,
        BComponentInputs
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}