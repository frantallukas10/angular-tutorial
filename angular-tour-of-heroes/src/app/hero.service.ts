import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const httpOptions: object = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl: string = 'api/heroes';
  constructor(private http: HttpClient) {}

  /** GET heroes from the server */
  public getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError('getHeroes', [])));
  }

  public getHero(id: number): Observable<Hero> {
    return of(HEROES.find((hero: Hero) => hero.id === id));
  }

  /** PUT: update the hero on the server */
  public updateHero(hero: Hero): Observable<any> {
    return this.http
      .put(this.heroesUrl, hero, httpOptions)
      .pipe(catchError(this.handleError<any>('updateHero')));
  }

  /** POST: add a new hero to the server */
  public addHero(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(catchError(this.handleError<Hero>('addHero')));
  }

  /** DELETE: delete the hero from the server */
  public deleteHero(hero: Hero | number): Observable<Hero> {
    const id: number = typeof hero === 'number' ? hero : hero.id;
    const url: string = `${this.heroesUrl}/${id}`;

    return this.http
      .delete<Hero>(url, httpOptions)
      .pipe(catchError(this.handleError<Hero>('deleteHero')));
  }

  private handleError<T>(operation: string = 'operation', result?: T): any {
    return (error: string): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
