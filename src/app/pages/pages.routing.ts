import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { ProgressComponent } from './progress/progress.component';
//import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
//import { PromesasComponent } from './promesas/promesas.component';
//import { RxjsComponent } from './rxjs/rxjs.component';

// Mantenimientos
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { VideoJuegosComponent } from './mantenimientos/videojuegos/videojuegos.component';
import { ClienteComponent } from './mantenimientos/clientes/cliente.component';
import { DonaComponent } from '../components/dona/dona.component';
import { VentasIngresoComponent } from './ventas-ingreso/ventas-ingreso.component';



const routes: Routes = [
    { 
        path: 'dashboard', 
        component: PagesComponent,
        canActivate: [ AuthGuard ],
        children: [
            { path: '', component: DonaComponent, data: { titulo: 'Datos de ventas' } },

            // Ventas
            { path: 'ventas', component: VentasIngresoComponent, data: { titulo: 'Ingresar Venta' }},
            { path: 'configuracion ', component: AccountSettingsComponent , data:{titulo: 'Configuracion'}},
            // Mantenimientos
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Matenimiento de Usuarios' }},
            { path: 'videojuegos', component: VideoJuegosComponent, data: { titulo: 'Matenimiento de VideoJuegos' }},
            { path: 'videojuegos/:id', component: VideoJuegosComponent, data: { titulo: 'Matenimiento de VideoJuegos' }},
            { path: 'clientes', component: ClienteComponent, data: { titulo: 'Matenimiento de Clientes' }},
            { path: 'clientes/:id', component: VideoJuegosComponent, data: { titulo: 'Matenimiento de Clientes' }}

            ,
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}


