import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Ventas',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Ingresar venta', url: 'ventas' },
      ]
    },

    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: 'usuarios' },
        { titulo: 'Videojuegos', url: 'videojuegos' },
        { titulo: 'Clientes', url: 'clientes' },
      ]
    },
  ];

  constructor() { }
}
