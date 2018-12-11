import { HeroesService } from './../../services/heroes.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  hero: Hero = {
    name: '',
    bio: '',
    home: 'Marvel'
  };
  formStatus: boolean = false;
  id: string;

  constructor(private heroesService: HeroesService, private router: Router, 
              private activatedRoute: ActivatedRoute) { 
                this.activatedRoute.params.subscribe( data => this.id = data.id);
              }

  saveHero() {
    console.log(this.hero);
    if (this.id == 'new') {
      
      this.heroesService.saveNewHero(this.hero).subscribe( data => {
        this.router.navigate(['/hero', data.name]);
      }, error => {
        console.log(error);
      });

    } else {
      this.heroesService.updateHero(this.hero, this.id).subscribe( data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
    }
    
  }

}
