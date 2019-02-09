import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  public createDb(): object {
    const heroes: Hero[] = HEROES;
    return { heroes };
  }

  public genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero: Hero) => hero.id)) + 1
      : 11;
  }
}
