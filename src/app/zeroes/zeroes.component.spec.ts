import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroesComponent } from './zeroes.component';

describe('ZeroesComponent', () => {
  let component: ZeroesComponent;
  let fixture: ComponentFixture<ZeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
