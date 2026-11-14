import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home-page.component').then((module) => module.HomePageComponent),
    title: 'Prakruthi B N — QA Automation Engineer',
  },
  { path: '**', redirectTo: '' },
];
