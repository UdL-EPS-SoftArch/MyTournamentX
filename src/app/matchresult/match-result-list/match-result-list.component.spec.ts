import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchResultListComponent } from './match-result-list.component';

describe('MatchResultListComponent', () => {
  let component: MatchResultListComponent;
  let fixture: ComponentFixture<MatchResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
