import {Injectable} from '@angular/core';
import {Zero} from './zero';
import {ZEROES} from './zeroes/mock-zeroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class ZeroService {

  constructor(private messageService: MessageService) {}

  getZeroes(): Observable<Zero[]> {
    this.messageService.add('ZeroService: fetched zeroes list' );
    return of(ZEROES);
  }

  getZero(ID: number): Observable<Zero> {
    this.messageService.add('ZeroService: fetching details' );
    return of(ZEROES.find(zero => zero.ID === ID));
  }
}
