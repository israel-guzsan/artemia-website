import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
sections = [
  { 
  title: 'Mundo', 
  image: 'assets/home-cards/mundo.png', 
  description: 'Las leyes que rigen la realidad: el paso del tiempo, los ciclos naturales y los secretos que sostienen este mundo.', 
  link: '/mundo' 
},
{ 
  title: 'Historia', 
  image: 'assets/home-cards/historia.png', 
  description: 'Guerras olvidadas, eventos que reescribieron el mundo y fragmentos del pasado.', 
  link: '/historia' 
},
{ 
  title: 'Civilizaciones', 
  image: 'assets/home-cards/civilizaciones.png', 
  description: 'Pueblos, culturas y naciones que han dado forma al mundo y a su identidad a lo largo del tiempo.', 
  link: '/civilizaciones' 
},
{ 
  title: 'Magia', 
  image: '', 
  description: 'Un poder inestable que cambió el mundo… y a quienes lo usan.', 
  link: '/magia' 
},
{ 
  title: 'Poder', 
  image: '', 
  description: 'Facciones, alianzas y fuerzas en conflicto que luchan por influencia, control y supervivencia.', 
  link: '/poder' 
},
{ 
  title: 'Personajes', 
  image: '', 
  description: 'Figuras conocidas, olvidadas o desconocidas que forman parte de estas historias.', 
  link: '/personajes' 
},
{ 
  title: 'Relatos', 
  image: '', 
  description: 'Pequeñas piezas de algo mucho mayor.', 
  link: '/relatos' 
}
];
}
