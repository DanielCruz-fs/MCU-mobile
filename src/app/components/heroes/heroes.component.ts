import { HeroesService } from './../../services/heroes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: any[] = [];
  loading: boolean = true;

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes().subscribe( data => {
      console.log(data);
      this.heroes = data;
      this.loading = false;
    });
  }

  eliminateHero(id: string) {
    this.heroesService.deleteHero(id).subscribe( data => {
      console.log(data)
      if (data) {
        console.error(data); 
      } else {
        delete this.heroes[id];  
      }
    });
  }

}
