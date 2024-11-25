import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';
import { Hero } from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, CommonModule, NgIf, UpperCasePipe],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
