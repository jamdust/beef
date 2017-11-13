import {Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import {Zero} from '../zero';
import {Location} from '@angular/common';
import {ZeroService} from '../zero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-zero-detail',
  templateUrl: './zero-detail.component.html',
  styleUrls: ['./zero-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ZeroDetailComponent implements OnInit {
  @Input() zero: Zero;
  constructor(
    private route: ActivatedRoute,
    private zeroService: ZeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getZero();
  }

  getZero(): void {
    const ID = +this.route.snapshot.paramMap.get('ID');
    this.zeroService.getZero(ID).subscribe(zero => this.zero = zero);
  }

  goBack(): void {
    this.location.back();
  }

}
