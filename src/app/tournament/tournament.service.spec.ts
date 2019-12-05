import { TestBed } from '@angular/core/testing';

import { TournamentServiceService } from './tournament.service';

describe('TournamentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentServiceService = TestBed.get(TournamentServiceService);
    expect(service).toBeTruthy();
  });
});