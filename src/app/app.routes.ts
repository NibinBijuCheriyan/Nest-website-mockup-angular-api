import { Routes } from '@angular/router';
import { About } from './Pages/about/about';
import { Home } from './home/home';
import { Services } from './Pages/services/services';
import { Contact } from './Pages/contact/contact';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component: Home},
    {path: 'index', component: Home},
    {path: 'about', component: About},
    {path:'services', component: Services},
    {path:'contact',component:Contact}
    
];

