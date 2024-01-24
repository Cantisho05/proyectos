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
      title: "¡BIEVENIDO A TicketTally!",
      image: "../../assets/imagenes/Imagen1.jpg",
      description: "Encuentra tu proximo destino y descubre las mejores ofertas. ",
      texto_ayuda: "Desliza para continuar.",
      class: "slide-1"
    },

    {
      title: " VUELOS A UN TAP! ",
      image: "../../assets/imagenes/Imagen2.jpg",
      description:"Explora nuevos horizontes con nuestros vuelos a un toque de distancia. Descubre experiencias únicas y destinos fascinantes con tan solo un clic." ,
      texto_ayuda: "Desliza para continuar",
      class: "slide-2"
    },

    {
      title: " ¡COMENCEMOS! ",
      image: "../../assets/imagenes/imagen3.jpg",
      description: " ¡Haz clic aquí para conocer más y comienza tu próxima aventura ahora mismo! ",
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
