import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent], // 👈 AQUÍ
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
sections = [
  { title: 'Mundo', image: 'assets/mundo.png', description: 'Conoce el mundo de Artemia', link: '/mundo' },
  { title: 'Historia', image: 'assets/historia.png', description: 'Líneas temporales y eventos', link: '/historia' },
  { title: 'Personajes', image: 'assets/personajes.png', description: 'Conoce a los personajes de Artemia', link: '/personajes' },
];
}
