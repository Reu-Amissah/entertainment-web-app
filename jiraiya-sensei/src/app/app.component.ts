import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'jiraiya-sensei';

  movies: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.movies$.subscribe({
      next: (data) => ((this.movies = data), console.log(this.movies)),
      error: (err) => console.error(err),
      complete: () => console.log('All Movies fetched'),
    });
  }
}
