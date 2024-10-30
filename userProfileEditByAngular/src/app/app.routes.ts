import { Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileEditComponentComponent } from './components/user-profile-edit-component/user-profile-edit-component.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: UserProfileComponent
    },
    {
        path: 'editProfile',
        component: UserProfileEditComponentComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent 
    }
];