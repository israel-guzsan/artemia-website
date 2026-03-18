import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mundo', loadComponent: () => import('./pages/mundo/mundo.component').then(m => m.MundoComponent) },
  { path: 'historia', loadComponent: () => import('./pages/historia/historia.component').then(m => m.HistoriaComponent) },
  { path: '**', redirectTo: '' }
];