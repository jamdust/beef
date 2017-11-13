import {Component, OnInit} from '@angular/core';
import {Zero} from '../zero';
import {ZeroService} from '../zero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  zeroes: Zero[] = [];

  constructor(private zeroService: ZeroService) {}

  ngOnInit() {
    this.getZeroes();
  }

  getZeroes(): void {
    this.zeroService.getZeroes()
      .subscribe(zeroes => this.zeroes = zeroes.slice(1, 5));
  }
}
