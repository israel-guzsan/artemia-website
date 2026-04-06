import { Injectable, signal } from '@angular/core';

export type Season = 'winter' | 'spring' | 'summer' | 'autumn' | '';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {

  season = signal<Season>('');

  setSeason(newSeason: Season) {
    this.season.set(newSeason);
  }
}