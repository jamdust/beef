import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Zero} from '../zero';
import {ZEROES} from './mock-zeroes';
import {ZeroService} from '../zero.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-zeroes',
  templateUrl: './zeroes.component.html',
  styleUrls: ['./zeroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ZeroesComponent implements OnInit {
  zeroes: Zero[];

  constructor(private zeroService: ZeroService) {}
  ngOnInit() {
    this.getZeroes();
  }

  getZeroes(): void {
    this.zeroService.getZeroes().subscribe(zeroes => this.zeroes = zeroes);
  }
  //  zero: Zero = {
  //    ID: 1,
  //    Name: 'Spiderman'
  //  };

}
