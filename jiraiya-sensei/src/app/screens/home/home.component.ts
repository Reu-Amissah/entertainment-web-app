import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { TrendingCardComponent } from '../../components/trending-card/trending-card.component';
import { Movie } from '../../Interface/movie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, FormsModule, TrendingCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  searchData!: string;

  movie: Movie = {
    title: 'Avatar',
    thumbnail: {
      trending: {
        small: 'trending-small-thumbnail-url',
        large: 'trending-large-thumbnail-url',
      },
      regular: {
        small: 'regular-small-thumbnail-url',
        medium: 'regular-medium-thumbnail-url',
        large: 'regular-large-thumbnail-url',
      },
    },
    year: 2009,
    category: 'Science Fiction',
    rating: 'PG-13',
    isBookmarked: false,
    isTrending: true,
  };

  search() {
    console.log(this.searchData);
  }
}
