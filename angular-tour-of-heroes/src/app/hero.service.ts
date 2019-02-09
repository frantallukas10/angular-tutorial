import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}
  // public getHeroes(): Array<Hero> {
  //   return HEROES;
  // }

  public getHeroes(): Observable<Array<Hero>> {
    return of(HEROES);
  }

  public getHero(id: number): Observable<Hero> {
    return of(HEROES.find((hero: Hero) => hero.id === id));
  }
}