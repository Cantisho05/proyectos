import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages={
    email:[
      {type: "required", message: "El email es obligatorio."},
      {type: "pattern", message: " El email ingresado es valido "}
    ]
  }
  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ]))
    })
  }

  ngOnInit() {
  }
login(login_data: any){
  console.log((login_data));
}
  
  
}
