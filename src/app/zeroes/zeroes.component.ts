import {Component, OnInit} from '@angular/core';
import {Zero} from '../zero';
import {ZeroService} from '../zero.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-zeroes',
  templateUrl: './zeroes.component.html',
  styleUrls: ['./zeroes.component.css'],
})
export class ZeroesComponent implements OnInit {
  zeroes: Zero[];

  constructor(private zeroService: ZeroService) {}
  ngOnInit() {
    this.getZeroes();
  }

  add(Name: string): void {
    Name = Name.trim();
    if (!Name) {return; }
    this.zeroService.addZero({Name} as Zero)
      .subscribe(zero => {
        this.zeroes.push(zero);
      });
  }

  remove(zeroToRemove: Zero): void {
    this.zeroes = this.zeroes.filter(h => h !== zeroToRemove);
    this.zeroService.removeZero(zeroToRemove).subscribe();
  }

  getZeroes(): void {
    this.zeroService.getZeroes().subscribe(zeroes => this.zeroes = zeroes);
  }
}
