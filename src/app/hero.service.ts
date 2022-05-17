import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: featched heroes');
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    const hero = HEROES.find(x => x.id === id)!;
    this.messageService.add(`HeroService: featched hero id=${id}`);
    return of(hero);
  }
}
