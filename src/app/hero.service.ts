import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero } from './Models/Hero';
import { MockProvider } from './Models/Heroes-mock';

@Injectable({
  providedIn: "root"
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(MockProvider.getHeroList());
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(MockProvider.getHeroList().find(hero => hero.id === id));
  }
}
