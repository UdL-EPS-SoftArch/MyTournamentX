import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchResultDetailComponent } from './match-result-detail.component';

describe('MatchResultDetailComponent', () => {
  let component: MatchResultDetailComponent;
  let fixture: ComponentFixture<MatchResultDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchResultDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchResultDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
