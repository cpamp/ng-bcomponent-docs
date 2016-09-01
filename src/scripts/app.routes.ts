import {Routes, RouterModule} from '@angular/router';
import {HomePage} from './components/home/home.page';
import {GettingStartedPage} from './components/gettingstarted/gettingstarted.page';
import {BComponentInputs} from './components/bcomponent/inputs/bcomponent.inputs';

const routes: Routes = [
    { path: '',                     component: HomePage },
    { path: 'home',                 component: HomePage },
    { path: 'getting-started',      component: GettingStartedPage },
    { path: 'bcomponent/inputs',    component: BComponentInputs },

    { path: '**',                   redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(routes);