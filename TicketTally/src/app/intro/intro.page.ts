import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage{

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

  constructor( 
    private router: Router, 
    private storage: Storage 
    ) { }

    async ionViewDidEnter() {
      console.log("BIENVENIDO A TICKETTALLY");
      const mostreIntro = await this.storage.get('mostreLaIntro');
      if (mostreIntro) {
         console.log("Ya esta viendo");
        this.router.navigateByUrl('/intro');
      } else {
         console.log("Aun no has visto la intro");
      }
    }
  
    async marcarIntroComoVista() {
      await this.storage.set('mostreLaIntro', true);
      this.router.navigateByUrl('/home');
    }
  
    iralHome(){
      console.log("Ya esta viendo el homeeee");
      this.marcarIntroComoVista();
    }
  
    omitir(){
      this.marcarIntroComoVista();
    }
}
