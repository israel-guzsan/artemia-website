import { Component, inject } from '@angular/core';
import { SeasonService } from '../../../core/season.service';

@Component({
  selector: 'app-calendario',
  imports: [],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.scss',
  standalone: true
})
export class CalendarioComponent {

  private seasonService = inject(SeasonService);

  setSeason(season: any) {
    this.seasonService.setSeason(season);
  }
}
