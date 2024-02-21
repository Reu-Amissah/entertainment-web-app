import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../Interface/movie';
import { DataService } from '../../services/data.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NavBarComponent, FormsModule, MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  searchData: string = '';
  movie: Movie[] = [];

  constructor(private movies: DataService) {}

  ngOnInit(): void {
    this.movies.getMovies().subscribe((movie) => {
      this.movie = movie;
    });
  }

  search() {
    console.log('hello world');
  }
}
