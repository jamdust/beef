import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {of} from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {Zero} from '../zero';
import {ZeroService} from '../zero.service';

@Component({
  selector: 'app-zero-search',
  templateUrl: './zero-search.component.html',
  styleUrls: ['./zero-search.component.css']
})
export class ZeroSearchComponent implements OnInit {
  zeroes$: Observable<Zero[]>;
  private searchTerms = new Subject<string>();

  constructor(private zeroService: ZeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.zeroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(100),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.zeroService.searchZeroes(term)),
    );
  }
}
