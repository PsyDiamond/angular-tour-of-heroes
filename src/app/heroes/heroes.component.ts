import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageSerice.add(`HeroesComponent: Selected hero is=${hero.id}`);
  }

  constructor(private heroService: HeroService, private messageSerice: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
   this.heroService.getHeroes()
       .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string) : void {
    name = name.trim();

    if (!name) {return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(x => {
        this.heroes.push(x);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(x => x !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
