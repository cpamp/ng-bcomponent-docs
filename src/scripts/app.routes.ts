import {Routes, RouterModule} from '@angular/router';
import {HomePage} from './components/home/home.page';
import {GettingStartedPage} from './components/gettingstarted/gettingstarted.page';
import {BComponentInputs} from './components/bcomponent/inputs/bcomponent.inputs';
import {BComponentApi} from './components/bcomponent/api/bcomponent.api';
import {AlertInputs} from './components/alert/inputs/alert.inputs';
import {AlertApi} from './components/alert/api/alert.api';

const routes: Routes = [
    { path: '',                     component: HomePage },
    { path: 'home',                 component: HomePage },
    { path: 'getting-started',      component: GettingStartedPage },
    { path: 'bcomponent/inputs',    component: BComponentInputs },
    { path: 'bcomponent/api',       component: BComponentApi },
    { path: 'alert/inputs',         component: AlertInputs },
    { path: 'alert/api',            component: AlertApi },

    { path: '**',                   redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(routes);