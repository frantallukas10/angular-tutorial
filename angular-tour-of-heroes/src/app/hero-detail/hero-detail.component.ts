import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input() public hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  public ngOnInit(): void {
    this.getHero();
  }

  public getHero(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((hero: Hero) => (this.hero = hero));
  }

  public goBack(): void {
    this.location.back();
  }
}
