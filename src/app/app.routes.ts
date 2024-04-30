import { Routes } from '@angular/router';
import { LandingPageComponent } from './website/landing-page/landing-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'visionpro',
        pathMatch: 'full'
    },
    {
        path: 'visionpro',
        component: LandingPageComponent
    }
];
