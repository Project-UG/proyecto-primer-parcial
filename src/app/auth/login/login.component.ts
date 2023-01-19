import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { switchAll } from 'rxjs/operators';

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;
  public auth2: any;

  public loginForm = this.fb.group({
    username: ['' , Validators.required ],
    password: ['', Validators.required ]
  });


  constructor( private router: Router,
               private fb: FormBuilder,
               private usuarioService: UsuarioService,
               private ngZone: NgZone ) { }

  ngOnInit(): void {
  }


  login() {
    this.usuarioService.validarUsuario(this.loginForm.value)
              .subscribe((resp:any)=>{
                if(resp.estado == 'ok'){
                  localStorage.setItem('usuario',JSON.stringify(resp.usuario));
                  this.usuarioService.usuario = resp.usuario;
                  this.router.navigateByUrl('/dashboard');
                }else{
                  Swal.fire({
                    title:'Advertencia',
                    text:resp.mensaje,
                    icon:'warning'
                  })
                }
              },
              err=>{
                Swal.fire({
                  title:'Error',
                  text:'Ha ocurrido un error en el servidor',
                  icon:'error'
                })
              })

  }
  

}
