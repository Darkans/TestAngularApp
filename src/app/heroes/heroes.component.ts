import { Component, OnInit } from '@angular/core';
import { Hero } from '../Models/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroesList: Hero[];
  refreshHeroes = () => {
    this.heroesList = this.getHeroList(5);
  }

  constructor() {
    this.heroesList = this.getHeroList(5);
  }

  ngOnInit() {
  }

  selectedHero: Hero;
  public onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  private getHeroList(count:number): Hero[] {
    let result: Hero[] = [];

    for (let i = 0; i < count; i++) {
      let newHero = new Hero(i + 1, `heroname_${i + 1}`);
      result.push(newHero);
    }

    return result;
  }
}
