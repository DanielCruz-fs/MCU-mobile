import { HeroesService } from './../../services/heroes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: any[] = [];

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes().subscribe( data => {
      console.log(data);
      this.heroes = data;
    });
  }

}
