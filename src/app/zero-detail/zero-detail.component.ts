import {Component, OnInit, Input} from '@angular/core';
import {Zero} from '../zero';
import {Location} from '@angular/common';
import {ZeroService} from '../zero.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-zero-detail',
  templateUrl: './zero-detail.component.html',
  styleUrls: ['./zero-detail.component.css'],
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
    const id = +this.route.snapshot.paramMap.get('id');
    this.zeroService.log('Retrieving: ' + id);
    this.zeroService.getZero(id).subscribe(zero => this.zero = zero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.zeroService.updateZero(this.zero).subscribe(() => this.goBack());
  }

}
