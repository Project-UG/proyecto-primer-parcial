import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit{

  public usuario: Usuario;

  constructor( private usuarioService: UsuarioService ) {
    this.usuario = usuarioService.usuario || JSON.parse(localStorage.getItem('usuario'));
  }
  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }

  

  logout() {
    this.usuarioService.logout();
  }


}
