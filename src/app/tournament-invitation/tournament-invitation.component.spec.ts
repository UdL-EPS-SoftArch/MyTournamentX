import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentInvitationComponent } from './tournament-invitation.component';

describe('TournamentInvitationComponent', () => {
  let component: TournamentInvitationComponent;
  let fixture: ComponentFixture<TournamentInvitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentInvitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
