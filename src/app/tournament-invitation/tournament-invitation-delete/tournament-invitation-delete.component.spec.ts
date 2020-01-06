import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentInvitationDeleteComponent } from './tournament-invitation-delete.component';

describe('TournamentInvitationDeleteComponent', () => {
  let component: TournamentInvitationDeleteComponent;
  let fixture: ComponentFixture<TournamentInvitationDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentInvitationDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentInvitationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
