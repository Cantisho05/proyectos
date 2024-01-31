import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  registrationSuccess = false;
  validationMessages = {

    // mensajes de Email
    email: [
      { type: 'required',
       message: 'Email es requerido.' },
      { type: 'pattern',
       message: 'Ingresa un correo electronico valido.' }
    ],
    // mensajes de CONTRASEÑA
    password: [
      { type: 'required',
      message: 'La contraseña es requerida.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 8 caracteres.' },
      { type: 'maxlength', message: 'La contraseña no debe exceder los 20 caracteres.' },
      
    ],
    // mensajes de confirmacion de contraseña 
    confirmation_password: [
      { type: 'required', message: 'La confirmacio de contraseña es requerida.' },
      { type: 'passwordMismatch', message: 'Las contraseñas no son iguales.' },
       { type: 'minlength', message: 'La contraseña debe tener al menos 8 caracteres.' },
      { type: 'maxlength', message: 'La contraseña no debe exceder los 20 caracteres.' },
    ],
    // mensajes de Nombre
    name: [
      { type: 'required',
       message: 'Nombre es requerido.' }
    ],
    // mensajes de apellido
    last_name: [
      { type: 'required',
       message: 'Apellido es requerido.' }
    ]
  };

  // Constructor 
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage
  ) {

    // Aqui se encuntran las validaciones
    this.registerForm = this.formBuilder.group({
      email: new FormControl("", 
        Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      // CONTRASEÑA
      password: new FormControl("", 
        Validators.compose([
        Validators.required,
        Validators.minLength(8), 
        Validators.maxLength(20),
        
      ])),
      // CONFIRMACION DE CONTRASEÑA
      confirmation_password: new FormControl("", 
        Validators.compose([
        Validators.required,
        Validators.minLength(8), 
        Validators.maxLength(20)
        
      ])),
      // NOMBRE
      name: new FormControl("", 
        Validators.compose([
        Validators.required
      ])),
      last_name: new FormControl("", 
        Validators.compose([
        Validators.required
      ]))
    }, { validators: this.passwordMatchValidator });
  }
  
  ngOnInit() {
  }

    // Redirecionar al login
  redirectToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  register(register_data: any) {
    console.log(register_data);
    this.storage.set('user_data', register_data);
    this.registrationSuccess = true;
  }

  
    // Valida las coincidencia de contraseñas
passwordMatchValidator(group: FormGroup) {
  const password = group.get('password')!.value;
  const confirmationPassword = group.get('confirmation_password')!.value; 
  return password === confirmationPassword ? null : { passwordMismatch: true };
}

goToLogin(){
  this.navCtrl.navigateBack("/login");
}
}