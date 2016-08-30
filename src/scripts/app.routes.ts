import {Routes, RouterModule} from '@angular/router';
import {HomePage} from './components/home/home.page';
import {BComponentInputs} from './components/bcomponent/inputs/bcomponent.inputs';

const routes: Routes = [
    { path: '',                     component: HomePage },
    { path: 'home',                 component: HomePage },
    { path: 'bcomponent/inputs',    component: BComponentInputs }
];

export const routing = RouterModule.forRoot(routes);