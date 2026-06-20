import { Component, inject } from '@angular/core';
import { FactionsService } from '../../core/supabase-services/factions.service';

@Component({
  selector: 'app-poder',
  imports: [],
  templateUrl: './poderes.component.html',
  styleUrl: './poderes.component.scss',
  standalone: true
})

export class PoderesComponent {

  factions: any[] = [];

  private factionsService = inject(FactionsService);

  async ngOnInit() {
    this.factions = await this.factionsService.getFactions();
  }

}
