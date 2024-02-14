import { Injectable } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import data from '../../data.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _movies = new BehaviorSubject<any[]>(data);
  public movies$: Observable<any[]> = this._movies.asObservable();

  updateValue(newValue: any[]) {
    this._movies.next(newValue);
  }
}
