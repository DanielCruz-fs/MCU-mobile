import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../interfaces/hero.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  firebaseURL: string = 'https://crud-hero.firebaseio.com/heroes.json';
  firebaseUpdateURL: string = 'https://crud-hero.firebaseio.com/heroes';
  constructor(private http: Http) { }

  saveNewHero(hero: Hero) {
    let body = JSON.stringify(hero);
    let headers = new Headers({ 'Content-Type': 'application/json'});

    return this.http.post(this.firebaseURL, body, { headers }).pipe(map( data => {
      console.log(data.json());
      return data.json();
    }));
  }

  updateHero(hero: Hero, id: string) {
    let body = JSON.stringify(hero);
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let updateURL = `${this.firebaseUpdateURL}/${id}.json`;
    return this.http.put(updateURL, body, { headers }).pipe(map( data => {
      console.log(data.json());
      return data.json();
    }));
  }
}
