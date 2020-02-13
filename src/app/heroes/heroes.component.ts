import { HeroService } from './hero.service';
import { MessageService } from './../messages/message.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`)
  }

  getHeroes() {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

  }

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
