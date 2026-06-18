import { Component, inject } from '@angular/core';
import { CharactersService } from '../../core/supabase-services/characters.services';

@Component({
  selector: 'app-personajes',
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
  standalone: true
})
export class PersonajesComponent {

  characters: any[] = [];

  private charactersService = inject(CharactersService);

  async ngOnInit() {
    this.characters = await this.charactersService.getCharacters();
  }

}
