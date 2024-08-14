import { Routes } from '@angular/router';
import TablaComponent from './tablaContabilidad/pages/tabla/tabla.component';

export const routes: Routes = [
    {
        path: 'tablaContabilidad',
        loadComponent: () => import('./tablaContabilidad/pages/tabla/tabla.component')
    },
    {
        path: '',
        redirectTo: '/tablaContabilidad',
        pathMatch: 'full'
    }
];
