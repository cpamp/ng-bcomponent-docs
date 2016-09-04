import {Route, RouterModule} from '@angular/router';
import {HomePage} from './components/home/home.page';
import {GettingStartedPage} from './components/gettingstarted/gettingstarted.page';
import {BComponentAbout} from './components/bcomponent/bcomponent.about';
import {BComponentApi} from './components/bcomponent/api/bcomponent.api';
import {BComponentInputs} from './components/bcomponent/inputs/bcomponent.inputs';
import {AlertAbout} from './components/alert/alert.about';
import {AlertApi} from './components/alert/api/alert.api';
import {AlertInputs} from './components/alert/inputs/alert.inputs';

const routes: Route[] = [
    { path: '',                     component: HomePage },
    { path: 'home',                 component: HomePage },
    { path: 'getting-started',      component: GettingStartedPage },
    { path: 'bcomponent',           component: BComponentAbout },
    { path: 'bcomponent/api',       component: BComponentApi },
    { path: 'bcomponent/inputs',    component: BComponentInputs },
    { path: 'alert',                component: AlertAbout },
    { path: 'alert/api',            component: AlertApi },
    { path: 'alert/inputs',         component: AlertInputs },

    { path: '**',                   redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(routes);