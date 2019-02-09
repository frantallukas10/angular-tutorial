import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];

  constructor(private heroService: HeroService) {}

  public ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): any {
    this.heroService
      .getHeroes()
      .subscribe((heroes: Hero[]) => (this.heroes = heroes));
  }

  public search(term: string): void {
    /* TODO seraching https://angular.io/tutorial/toh-pt6 */
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero: Hero) => {
      this.heroes.push(hero);
    });
  }

  public delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h: Hero) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
