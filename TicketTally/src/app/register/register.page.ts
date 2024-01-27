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
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email address.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' }
      // Add more password validation messages as needed
    ],
    confirmation_password: [
      { type: 'required', message: 'Confirmation password is required.' },
      { type: 'passwordMismatch', message: 'Passwords do not match.' }
    ],
    name: [
      { type: 'required', message: 'Name is required.' }
    ],
    last_name: [
      { type: 'required', message: 'Last name is required.' }
    ]
  };
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      password: new FormControl("", Validators.compose([
        Validators.required,
        // Add more password validations as needed
      ])),
      confirmation_password: new FormControl("", Validators.compose([
        Validators.required,
        // Add more password validations as needed
      ])),
      name: new FormControl("", Validators.compose([
        Validators.required
      ])),
      last_name: new FormControl("", Validators.compose([
        Validators.required
      ]))
    }, { validators: this.passwordMatchValidator });
  }
  
  ngOnInit() {
  }

  redirectToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  register(register_data: any) {
    // Implementa tu servicio de registro aquí
    console.log(register_data);
    
    // Ejemplo: Guardar datos en el almacenamiento
    this.storage.set('user_data', register_data);
    
    // Actualizar la propiedad registrationSuccess
    this.registrationSuccess = true;
  }

  // Custom validator for password matching
  // Validador personalizado para la coincidencia de contraseñas
passwordMatchValidator(group: FormGroup) {
  const password = group.get('password')!.value; // Usa ! para afirmar que no será nulo
  const confirmationPassword = group.get('confirmation_password')!.value; // Usa ! para afirmar que no será nulo
  return password === confirmationPassword ? null : { passwordMismatch: true };
}

}