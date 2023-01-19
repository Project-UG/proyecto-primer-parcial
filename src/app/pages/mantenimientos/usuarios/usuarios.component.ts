import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';

import { Usuario } from '../../../interfaces/usuario.interface';

import { UsuarioService } from '../../../services/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit{

  public totalUsuarios: number = 0;
  public usuarios: Usuario[] = [];
  public usuariosTemp: Usuario[] = [];

  public isOpen:boolean = false;
  public tipoModal:string;
  public usuarioInput:Usuario;

  public cargando: boolean = true;

  constructor( private usuarioService: UsuarioService,
               
              ) { }
  

  ngOnInit(): void {
    this.cargarUsuarios();

  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuarioService.cargarUsuarios()
      .subscribe( (resp:any) => {
        console.log(resp);
        this.totalUsuarios = resp.length;
        this.usuarios = resp;
        this.usuariosTemp = resp;
        this.cargando = false;
    })
  }

  

  buscar( termino: string ) {

    if ( termino.length === 0 ) {
      return this.usuarios = this.usuariosTemp;
    }
  }

  eliminarUsuario( usuario: Usuario ) {

    if ( usuario.id === this.usuarioService.getusuario().id ) {
      return Swal.fire('Error', 'No puede borrarse a si mismo', 'error');
    }

    Swal.fire({
      title: '¿Borrar usuario?',
      text: `Esta a punto de borrar a ${ usuario.username }`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
      if (result.value) {
        
        this.usuarioService.eliminarUsuario( usuario )
          .subscribe( (resp:any) => {
            
            if(resp.estado == 'ok'){
              Swal.fire(
                'Usuario borrado',
                `${ usuario.username } fue eliminado correctamente`,
                'success'
                );

            }else{
              Swal.fire({
                title:'Error',
                text:`${ resp.mensaje }`,
                icon:'error'
              });
            }
              
              this.cargarUsuarios();
          });

      }
    })

  }

  registrarUsuario(){
    this.tipoModal = 'c';
    this.usuarioInput = null;
    this.isOpen = true;
  }

  editarUsuario(usuario:Usuario){
    this.usuarioInput = {...usuario};
    this.tipoModal = 'm';
    this.isOpen = true;
  }

  eventoGuardar($event){
    this.cargarUsuarios();
  }
  cerrarModal($event){
    this.isOpen = false;
  }


}
