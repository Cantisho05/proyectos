import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {
      title: "BIENVENIDO A TU DESTINO CINEMATOGRAFICO",
      image: "../../assets/imagenes/wonka.jpg",
      description: "Sumérgete en un universo de historias infinitas y experiencias inigualables.",
      pin: "¿Que te gustaria ver hoy? ",
      texto_ayuda: "Desliza para continuar o pulsa el boton",
      class: "slide-1"
    },

    {
      title: " MISIÓN ",
      image: "../../assets/imagenes/cine.jpg",
      description: "Ofrecer una plataforma digital que celebre y promueva la magia del cine, proporcionando a los amantes del séptimo arte un espacio donde puedan descubrir, explorar y conectarse con películas de diversas épocas, géneros y culturas. Nuestra misión es compartir la pasión por el cine mediante reseñas, análisis profundos,noticias frescas y contenido exclusivo, inspirando a una comunidad global a apreciar, reflexionar y disfrutar del arte cinematográfico en todas sus formas.",
      texto_ayuda: "Desliza para continuar",
      class: "slide-2"
    },

    {
      title: "COMENCEMOS",
      description: "Haz clic aquí para conocer más ",
      class: "slide-3"
    }
  ]

  constructor(private router: Router) { }

  goToHome(){
    console.log("go To Home");
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
