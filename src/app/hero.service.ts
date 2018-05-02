import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from 'environments/environment';
import { Register } from './register';

@Injectable()
export class HeroService {

  constructor(
    private http: Http
  ) { }

  public getAllHeroes(): Observable<Hero[]> {
    return this.http
      .get(environment.apiUrl + '/hero')
      .map(response => {
        const items = response.json();
        return items.map((hero) => new Hero(hero));
      })
      .catch(this.handleError);
      /*
      return [
          new Hero({"name": "Capitão América", "id":  3, "image": "/assets/images/captain-america.jpg"}),
          new Hero({"name": "Doutor Estranho", "id":  4, "image": "/assets/images/doctor-strange.jpg"}),
          new Hero({"name": "Drax", "id": 11, "image": "/assets/images/drax.jpg"}),
          new Hero({"name": "Feiticeira Escarlate", "id":  9, "image": "/assets/images/scarlet-witch.jpg"}),
          new Hero({"name": "Gamora", "id": 12, "image": "/assets/images/gamora.jpg"}),
          new Hero({"name": "Groot", "id": 13, "image": "/assets/images/groot.jpg"}),
          new Hero({"name": "Homem de Ferro", "id":  1, "image": "/assets/images/iron-man.jpg"}),
          new Hero({"name": "Homem-Aranha", "id":  6, "image": "/assets/images/spider-man.jpg"}),
          new Hero({"name": "Hulk", "id":  2, "image": "/assets/images/hulk.jpg"}),
          new Hero({"name": "Lobo Branco", "id": 10, "image": "/assets/images/bucky.jpg"}),
          new Hero({"name": "Máquina de Combate", "id":  5, "image": "/assets/images/war-machine.jpg"}),
          new Hero({"name": "Pantera Negra", "id":  7, "image": "/assets/images/black-panther.jpg"}),
          new Hero({"name": "Rocket", "id": 14, "image": "/assets/images/rocket.jpg"}),
          new Hero({"name": "Visão", "id":  8, "image": "/assets/images/the-vision.jpg"})
      ];
      */
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  public getHeroById(id: number): Observable<Hero> {
    return this.http
      .get(environment.apiUrl + '/hero/' + id)
      .map(response => {
        return new Hero(response.json());
      })
      .catch(this.handleError);
    /*for (var item of this.getAllHeroes()) {
      if (item.id == id) {
        return item;
      }
    }*/
  }
}
