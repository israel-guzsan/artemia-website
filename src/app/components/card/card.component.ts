import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule], // 👈 IMPORTANTE para routerLink
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title!: string;
  @Input() image!: string;
  @Input() description!: string;
  @Input() link!: string;

}