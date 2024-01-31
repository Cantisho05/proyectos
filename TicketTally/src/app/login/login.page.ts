import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: 'required', message: 'El email es obligatorio.' },
      { type: 'pattern', message: 'El email ingresado no es válido.' }
    ],
    password: [
      { type: 'required', message: 'La contraseña es obligatoria.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 8 caracteres.' },
      { type: 'maxlength', message: 'La contraseña no debe exceder los 20 caracteres.' },
    ]
  };
  loginMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', 
      Validators.compose([
      Validators.required, 
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      
      password: new FormControl('', 
      Validators.compose([
      Validators.required, 
      Validators.minLength(8), 
      Validators.maxLength(20)]))
    });
  }

  ngOnInit() {}
  redirectToRegister() {
    this.navCtrl.navigateForward('/register');
  }

  login(loginData: any) {
    console.log(loginData);
    this.authService.loginUser(loginData).then(res => {
    this.storage.set('userLoggedIn', true);
    this.navCtrl.navigateForward('/menu/home');
    })
  .catch(err => {
    this.loginMessage = 'Error al iniciar sesión. Verifica tus datos.';
    });
  }
}

