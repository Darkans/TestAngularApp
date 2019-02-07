import { Hero } from './Hero';

export class MockProvider {

  private static heroList: Hero[];

  static getHeroList(): Hero[] {
    if (this.heroList == undefined) {
      this.heroList = this.generateHeroList(7);
    }

    return this.heroList;
  }

  private static generateHeroList(count: number): Hero[] {
    let result: Hero[] = [];

    for (let i = 0; i < count; i++) {
      let newHero = new Hero(i + 1, `heroname_${i + 1}`);
      result.push(newHero);
    }

    return result;
  }
}

