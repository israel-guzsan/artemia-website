import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mundo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mundo.component.html',
  styleUrls: ['./mundo.component.scss']
})
export class MundoComponent {
  private _router = inject(Router);

  goTo(section: string) {
    this._router.navigate([`/mundo/${section}`]); // va a /mundo/calendario
  }
}