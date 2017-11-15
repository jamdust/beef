import {Injectable} from '@angular/core';
import {Zero} from './zero';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

const cudOptions = {headers: new Headers({'Content-Type': 'application/json'})};

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable()
export class ZeroService {

  constructor(private http: HttpClient, private messageService: MessageService) {}

  private zeroesUrl = 'api/zeroes';

  getZeroes(): Observable<Zero[]> {
    return this.http.get<Zero[]>(this.zeroesUrl)
      .pipe(
      tap(zeroes => this.log(`fetched zeroes`)),
      catchError(this.handleError('getZeroes', [])));
  }

  getZero<Data>(id: number): Observable<Zero> {
    const url = `${this.zeroesUrl}/?id=${id}`;
    this.log(url);
    return this.http.get<Zero[]>(url)
      .pipe(
      map(zeroes => zeroes[0]), // returns a {0|1} element array
      tap(h => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} zero id=${id}`);
      }),
      catchError(this.handleError<Zero>(`getZero id=${id}`))
      );
  }

  updateZero(zero: Zero): Observable<any> {
    const url = `${this.zeroesUrl}/?id=${zero.id}`;
    this.log(url);
    return this.http.put(this.zeroesUrl, zero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${zero.id}`)),
      catchError(this.handleError<any>('updateZero'))
    );


    //  getZero(id: number): Observable<Zero> {
    //    this.messageService.add('ZeroService: fetching details');
    //    return of(ZEROES.find(zero => zero.id === id));
    //  }

    /** GET zero by id. Will 404 if id not found */
    //  getZero(id: number): Observable<Zero> {
    //    const url = `${this.zeroesUrl}/${id}`;
    //    return this.http.get<Zero>(url).pipe(
    //      tap(_ => this.log(`fetched zero id=${id}`)),
    //      catchError(this.handleError<Zero>(`getZero id=${id}`))
    //    );
    //  }

    //  /** GET zero by id. Will 404 if id not found */
    //  getZero(id: number): Observable<Zero> {
    //    const url = `${this.zeroesUrl}/${id}`;
    //    //    return this.http.get<Zero>(url).pipe(tap(_ => this.log(`fetched zero id=${id}`)));
    //    return this.http.get<Zero>(url).pipe(tap(_ => this.log(`fetched zero id=${id}`)), catchError(this.handleError<Zero>(`getZero id=${id}`)));
    //  }
  }

  addZero(zero: Zero): Observable<Zero> {
    this.log(zero.Name);
    return this.http.post(this.zeroesUrl, zero, httpOptions).pipe(
      tap(_ => this.log(`added hero id=${zero.id}`)),
      catchError(this.handleError<any>('addZero'))
    );
  }

  removeZero(zero: Zero): Observable<Zero> {
    const url = `${this.zeroesUrl}/?id=${zero.id}`;
    this.log('Removing: ' + zero.Name);
    return this.http.delete(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${zero.id}`)),
      catchError(this.handleError<any>('deleteZero'))
    );
  }

  searchZeroes(term: string): Observable<Zero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Zero[]>(`api/zeroes/?Name=${term}`).pipe(
      tap(_ => this.log(`found zeroes matching "${term}"`)),
      catchError(this.handleError<Zero[]>('searchZeroes', []))
    );
  }

  public log(message: string) {
    this.messageService.add('ZeroService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
