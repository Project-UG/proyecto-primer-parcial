import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import {Usuario} from '../interfaces/usuario.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario: Usuario;

  public dataUsuarios: Usuario[];

  constructor( private http: HttpClient, 
                private router: Router,
                ) {

  }

  setData(){
    this.cargarUsuarios()
          .subscribe((resp:any)=>{
            this.dataUsuarios = resp;
          })
  }

  getusuario(){
    return this.usuario;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  validarUsuario(usuario:Usuario){
    return this.http.post(`${base_url}/usuario/validar`,usuario);
  }

  crearUsuario( usuario: Usuario ) {
    return this.http.post(`${ base_url }/usuario/crear`, usuario );
  }

  actualizar(usuario:Usuario){
    return this.http.post(`${ base_url }/usuario/actualizar`, usuario )
  }

  cargarUsuarios() {
    return this.http.get(`${ base_url }/usuario/listar`);
  }

  eliminarUsuario( usuario: Usuario ) {
      return this.http.post( `${ base_url }/usuario/eliminar`, usuario );
  }

  consultarUsuario(username:string){
    return this.http.get(`${ base_url }/usuario/consultar/${username}`);
  }

}
