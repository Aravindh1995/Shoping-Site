import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { LoginComponent } from './components/authendication-components/login/login.component';
import { DashboardComponent } from './components/features-components/dashboard/dashboard.component';
import { authGuard } from './components/authendication-components/auth.guard';
import { LayoutComponent } from './components/main-components/layout/layout.component';
import { ArrivedAndSoldProductComponent } from './components/features-components/arrived-and-sold-product/arrived-and-sold-product.component';
import { ShopListComponent } from './components/features-components/shop-list/shop-list.component';
import { ErrorPageComponent } from './shared-files/compoents/error-page/error-page.component';

export const routes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'layout', component: LayoutComponent, canActivate: [authGuard], 
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
            {
                path: 'dashboard', component: DashboardComponent, canActivate: [authGuard],
                data: { breadcrumb: ['Home', 'Dashboard'] }
            },
            {
                path: 'arrived-sold', component: ArrivedAndSoldProductComponent, canActivate: [authGuard],
                data: { breadcrumb: ['Home', 'Arrived & Sold'] }
            },
            {
                path: 'shop-list', component: ShopListComponent, canActivate: [authGuard],
                data: { breadcrumb: ['Home', 'Shop List'] }
            },
            { 
                path: 'error-page',
                component: ErrorPageComponent,
                canActivate: [authGuard],
                data: { breadcrumb: ['Home', 'Error Page'] },
            },
        ],
    },
    { path: '**', redirectTo: '/login' },

    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    // { path: 'dashboard', component: DashboardComponent, },
    // { path: 'arrived-sold', component: ArrivedAndSoldProductComponent },
    // { path: 'shop-list', component: ShopListComponent },

    // { path: '', loadComponent: () => import('./components/features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
    // {path: '404', loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent)},
    // {path: 'movies', loadChildren: () => import('./features/content/content.routes').then(m => m.CONTENT_ROUTES)},
    // {path: 'tv-shows', loadChildren: () => import('./features/content/content.routes').then(m => m.CONTENT_ROUTES)},
    // {path: '**', redirectTo: 'login'}
    // {path: '**', redirectTo: '404'}
];
