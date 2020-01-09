import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentInvitationDetailComponent } from './tournament-invitation-detail.component';

describe('TournamentInvitationDetailComponent', () => {
  let component: TournamentInvitationDetailComponent;
  let fixture: ComponentFixture<TournamentInvitationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentInvitationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentInvitationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
