import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mundo', loadComponent: () => import('./pages/mundo/mundo.component').then(m => m.MundoComponent) },
  { path: 'historia', loadComponent: () => import('./pages/historia/historia.component').then(m => m.HistoriaComponent) },
  { path: 'naciones', loadComponent: () => import('./pages/naciones/naciones.component').then(m => m.NacionesComponent) },
  { path: 'culturas', loadComponent: () => import('./pages/culturas/culturas.component').then(m => m.CulturasComponent) },
  { path: 'naturaleza', loadComponent: () => import('./pages/naturaleza/naturaleza.component').then(m => m.NaturalezaComponent) },
  { path: 'magia', loadComponent: () => import('./pages/magia/magia.component').then(m => m.MagiaComponent) },
  { path: 'najim', loadComponent: () => import('./pages/najim/najim.component').then(m => m.NajimComponent) },
  { path: 'facciones', loadComponent: () => import('./pages/facciones/facciones.component').then(m => m.FaccionesComponent) },
  { path: 'personajes', loadComponent: () => import('./pages/personajes/personajes.component').then(m => m.PersonajesComponent) },
  { path: 'relatos', loadComponent: () => import('./pages/relatos/relatos.component').then(m => m.RelatosComponent) },
  { path: '**', redirectTo: '' }
];