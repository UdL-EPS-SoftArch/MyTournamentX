import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentInvitationEditComponent } from './tournament-invitation-edit.component';

describe('TournamentInvitationEditComponent', () => {
  let component: TournamentInvitationEditComponent;
  let fixture: ComponentFixture<TournamentInvitationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentInvitationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentInvitationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
