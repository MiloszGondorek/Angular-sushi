import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent },
];
