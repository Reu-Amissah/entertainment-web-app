import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { TrendingCardComponent } from '../../components/trending-card/trending-card.component';
import { Movie } from '../../Interface/movie';
import { TrendingMovies } from '../../services/trendingmovies.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, FormsModule, TrendingCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  searchData: string = '';
  trendingMovie: Movie[] = [];

  constructor(private trendingMovies: DataService) {}

  movie: Movie = {
    title: 'Avatar',
    thumbnail: {
      trending: {
        small: 'trending-small-thumbnail-url',
        large: '../../../assets/trymovie.jpg',
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

  ngOnInit(): void {
    this.trendingMovies.getTrendingMovies().subscribe((movie) => {
      this.trendingMovie = movie;
      console.log('trending movies: ' + this.movie);
    });
  }

  search() {
    console.log(this.searchData);
  }
}
