import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentInvitationCreateComponent } from './tournament-invitation-create.component';

describe('TournamentInvitationCreateComponent', () => {
  let component: TournamentInvitationCreateComponent;
  let fixture: ComponentFixture<TournamentInvitationCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentInvitationCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentInvitationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
