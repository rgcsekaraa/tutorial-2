import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HeroesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hero Editor';
}
