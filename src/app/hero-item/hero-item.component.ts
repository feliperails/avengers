import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent {
  @Input() hero: Hero;

  constructor(private router: Router) { }

  onChoose() {
    this.router.navigate(['/hero', this.hero.id]);
  }

}
