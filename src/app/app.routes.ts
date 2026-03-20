import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mundo', loadComponent: () => import('./pages/mundo/mundo.component').then(m => m.MundoComponent) },
  { path: 'mundo/calendario', loadComponent: () => import('./pages/mundo/calendario/calendario.component').then(m => m.CalendarioComponent) },
  { path: 'historia', loadComponent: () => import('./pages/historia/historia.component').then(m => m.HistoriaComponent) },
  { path: 'civilizaciones', loadComponent: () => import('./pages/civilizaciones/civilizaciones.component').then(m => m.CivilizacionesComponent) },
  { path: 'magia', loadComponent: () => import('./pages/magia/magia.component').then(m => m.MagiaComponent) },
  { path: 'poderes', loadComponent: () => import('./pages/poderes/poderes.component').then(m => m.PoderesComponent) },
  { path: 'personajes', loadComponent: () => import('./pages/personajes/personajes.component').then(m => m.PersonajesComponent) },
  { path: 'relatos', loadComponent: () => import('./pages/relatos/relatos.component').then(m => m.RelatosComponent) },
  { path: '**', redirectTo: '' }
];