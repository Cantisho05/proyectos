import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  event_list: any;
  categories: any[] = []; // Definir categories como un arreglo vacío

  constructor(
    private router: Router,
    private storage: Storage,
    private events: EventsService
  ) {}

  ionViewDidEnter() {
    this.events.getEvents().then(
      res => {
        this.event_list = res;
        console.log("Eventos desde el servidor", this.event_list);
      }
    );

    console.log("Local Events", this.events.getLocalEvents().events);

    // Llamar a getCategories para obtener las categorías y asignarlas a categories
    this.events.getCategories().then(
      res => {
        this.categories = res;
        console.log("Categorías desde el servidor", this.categories);
      }
    );
  }

  goToIntro() {
    console.log("vamos a la intro ");
    this.router.navigateByUrl('/intro');
    this.storage.set('mostreLaIntro', true);
  }
}
