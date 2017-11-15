import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroSearchComponent } from './zero-search.component';

describe('ZeroSearchComponent', () => {
  let component: ZeroSearchComponent;
  let fixture: ComponentFixture<ZeroSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
