import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Hero } from './Models/Hero';
import { MockProvider } from './Models/Heroes-mock';

@Injectable({
  providedIn: "root"
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.log('fetched heroes');
    return this.httpClient.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.log(`fetched hero id=${id}`);
    return this.httpClient.get<Hero[]>(this.heroesUrl).find(hero => hero.id === id);
  }

  private log(message: string) {
    this.messageService.add(`Hero Service: ${message}`);
  }
}
