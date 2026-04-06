import { Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SeasonService } from './core/season.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'Artemia';

  private seasonService = inject(SeasonService);

  seasonClass = computed(() => {
    const s = this.seasonService.season();
    return s ? s : '';
  });
}
