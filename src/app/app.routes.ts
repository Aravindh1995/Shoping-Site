import { Routes } from '@angular/router';
import { DashboardComponent } from './components/features/dashboard/dashboard.component';
import { ArrivedAndSoldProductComponent } from './components/features/arrived-and-sold-product/arrived-and-sold-product.component';
import { ShopListComponent } from './components/features/shop-list/shop-list.component';
// import { SideBarComponent } from './components/side-bar/side-bar.component';
// import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [

    // { path: '', loadComponent: () => import('./components/features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, },
    { path: 'arrived-sold', component: ArrivedAndSoldProductComponent },
    { path: 'shop-list', component: ShopListComponent },
    // {path: '404', loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent)},
    // {path: 'movies', loadChildren: () => import('./features/content/content.routes').then(m => m.CONTENT_ROUTES)},
    // {path: 'tv-shows', loadChildren: () => import('./features/content/content.routes').then(m => m.CONTENT_ROUTES)},
    // {path: '**', redirectTo: '404'}

];
