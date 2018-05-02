import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-choose-hero',
  templateUrl: './choose-hero.component.html',
  styleUrls: ['./choose-hero.component.css'],
  providers: [HeroService]
})
export class ChooseHeroComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(
    private heroService: HeroService
  ) { }

  public ngOnInit() {
    this.heroService.getAllHeroes().subscribe((x) => {this.heroes = x;});
  }
}
