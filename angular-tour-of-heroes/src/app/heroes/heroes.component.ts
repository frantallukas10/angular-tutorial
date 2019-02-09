import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public heroes: Array<Hero> = HEROES;
  public selectedHero: Hero;
  constructor() {}

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  public ngOnInit(): void {}
}
