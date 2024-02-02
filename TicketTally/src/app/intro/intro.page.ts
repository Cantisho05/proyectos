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
      description: "¡Compra tus boletos ahora y vive experiencias inolvidables que te inspirarán a alcanzar tus sueños! ",
      texto_ayuda: "Desliza para continuar.",
      class: "slide-1"
    },

    {
      title: " BOLETOS A UN TAP! ",
      image: "../../assets/imagenes/Imagen2.jpg",
      description:"Transforma momentos en recuerdos, reserva tu entrada hoy" ,
      texto_ayuda: "Desliza para continuar",
      class: "slide-2"
    },

    {
      title: " ¡COMENCEMOS! ",
      image: "../../assets/imagenes/imagen3.jpg",
      description: " La vida es un escenario, asegúrate de tener los mejores asientos. ¡Compra tus boletos y sé el protagonista de tu propia historia! ",
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
         console.log("Mira antes la intro para ir al home");
      }
    }
  
    async marcarIntroComoVista() {
      await this.storage.set('mostreLaIntro', true);
      this.router.navigateByUrl('/login');
    }
  
    iralHome(){
      console.log("Ya esta viendo el homeeee");
      this.marcarIntroComoVista();
    }
  
    omitir(){
      this.marcarIntroComoVista();
    }
}
