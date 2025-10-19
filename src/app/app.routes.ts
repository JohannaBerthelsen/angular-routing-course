import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';

export enum ROUTER_TOKENS {
  HOME = 'home',
  SHOP = 'shop',
  CONTACT = 'contact',
  ABOUT = 'about',
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTER_TOKENS.HOME,
    pathMatch: 'full',
  },
  {
    path: ROUTER_TOKENS.HOME,
    component: HomeComponent,
  },
  {
    path: ROUTER_TOKENS.SHOP,
    component: ProductsComponent,
  },
  {
    path: ROUTER_TOKENS.CONTACT,
    component: ContactComponent,
  },
  {
    path: ROUTER_TOKENS.ABOUT,
    component: AboutComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
