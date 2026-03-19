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
  { title: 'Mundo', image: 'assets/mundo.png', description: 'Los registros generales sobre Artemia: su forma, sus límites y aquello que lo define.', link: '/mundo' },
  { title: 'Historia', image: 'assets/historia.png', description: 'Guerras olvidadas, eventos que reescribieron el mundo y fragmentos del pasado.', link: '/historia' },
  { title: 'Naciones', image: 'assets/naciones.png', description: 'Territorios, fronteras cambiantes y lugares donde la historia aún se escribe.', link: '/naciones' },
  { title: 'Culturas', image: 'assets/culturas.png', description: 'Razas, culturas y pueblos que habitan Artemia.', link: '/culturas' },
  { title: 'Naturaleza', image: 'assets/naturaleza.png', description: 'Criaturas, ecosistemas y elementos que escapan al control de las civilizaciones.', link: '/naturaleza' },
  { title: 'Magia', image: 'assets/magia.png', description: 'Un poder inestable que cambió el mundo… y a quienes lo usan.', link: '/magia' },
  { title: 'Najim', image: 'assets/najim.png', description: 'Desconocido...', link: '/najim' },
  { title: 'Facciones', image: 'assets/facciones.png', description: 'Órdenes, alianzas y fuerzas que actúan en las sombras o a plena luz.', link: '/facciones' },
  { title: 'Personajes', image: 'assets/personajes.png', description: 'Figuras conocidas, olvidadas o desconocidas que forman parte de estas historias.', link: '/personajes' },
  { title: 'Relatos', image: 'assets/relatos.png', description: 'Pequeñas piezas de algo mucho mayor.', link: '/relatos' }
];
}
