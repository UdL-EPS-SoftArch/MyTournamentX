import { TestBed } from '@angular/core/testing';

import { TournamentInvitationService } from './tournament-invitation.service';

describe('TournamentInvitationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentInvitationService = TestBed.get(TournamentInvitationService);
    expect(service).toBeTruthy();
  });
});
