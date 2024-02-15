import { Injectable } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import data from '../../data.json';
import { Movie } from '../Interface/movie';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _movies = new BehaviorSubject<Movie[]>(data);
  public movies$: Observable<Movie[]> = this._movies.asObservable();

  updateValue(newValue: Movie[]) {
    this._movies.next(newValue);
  }
}
