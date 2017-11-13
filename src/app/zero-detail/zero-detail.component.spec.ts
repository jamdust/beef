import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroDetailComponent } from './zero-detail.component';

describe('ZeroDetailComponent', () => {
  let component: ZeroDetailComponent;
  let fixture: ComponentFixture<ZeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
