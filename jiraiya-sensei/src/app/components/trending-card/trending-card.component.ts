import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Movie } from '../../Interface/movie';

@Component({
  selector: 'app-trending-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './trending-card.component.html',
  styleUrl: './trending-card.component.css',
})
export class TrendingCardComponent {
  @Input()
  movies: Movie = {} as Movie;
}
