import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-mundo',
  standalone: true,
  imports: [RouterModule, CommonModule, CardComponent],
  templateUrl: './mundo.component.html',
  styleUrls: ['./mundo.component.scss']
})
export class MundoComponent {
  worldSections = [
    {
      title: 'Calendario',
      image: 'assets/world-cards/calendario.png',
      description: 'El tiempo se mide a través de las calendas, flores que marcan el paso de las estaciones.',
      link: '/mundo/calendario'
    }
  ];
}