import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise ((accept, reject) => {
      if(credential.email == 'jonathan@gmail.com' 
        && credential.password == '12345678'
        ){
        accept('Login correcto');
      }else{
        reject('login incorrecto')
      }
    });
  }
  registerUser(user: any) {
    return new Promise((accept, reject) => {
      if (user.email && user.password) {
        accept('Registro exitoso');
      } else {
        reject('Error en el registro');
      }
    });
  }
}
