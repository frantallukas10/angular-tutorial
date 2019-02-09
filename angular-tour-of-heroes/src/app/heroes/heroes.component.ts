import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Array<Hero>;
  public selectedHero: Hero;
  constructor(private heroService: HeroService) {}

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  public ngOnInit(): void {
    this.getHeroes();
  }

  // public getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  public getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes: Array<Hero>) => (this.heroes = heroes));
  }
}
