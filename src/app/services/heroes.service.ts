import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../interfaces/hero.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesURL: string = 'https://crud-hero.firebaseio.com/heroes.json';
  heroURL: string = 'https://crud-hero.firebaseio.com/heroes';
  constructor(private http: Http) { }

  saveNewHero(hero: Hero) {
    let body = JSON.stringify(hero);
    let headers = new Headers({ 'Content-Type': 'application/json'});

    return this.http.post(this.heroesURL, body, { headers }).pipe(map( data => {
      console.log(data.json());
      return data.json();
    }));
  }

  updateHero(hero: Hero, id: string) {
    let body = JSON.stringify(hero);
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let updateURL = `${this.heroURL}/${id}.json`;
    return this.http.put(updateURL, body, { headers }).pipe(map( data => {
      console.log(data.json());
      return data.json();
    }));
  }

  getHero(id: string) {
    let getURL = `${this.heroURL}/${id}.json`;
    return this.http.get(getURL).pipe(map( data => data.json() ));
  }

  getHeroes() {
    return this.http.get(this.heroesURL).pipe(map( data => data.json() ));
  }

  deleteHero(id: string) {
    let deleteURL = `${this.heroURL}/${id}.json`;
    return this.http.delete(deleteURL).pipe(map( data => data.json() )); 
  }
}
