import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatchServiceService } from '../../shared/services/match-service.service';
import { Match } from '../../shared/models/match';
import { Team } from 'src/app/shared/models/team';
import { Round } from 'src/app/shared/models/round';

@Component({
  selector: 'app-match-list',
  styleUrls: ['match-list.component.css'],
  templateUrl: './match-list.component.html'
})
export class MatchListComponent implements OnInit {

    matches: Match[];
    @Input() round: Round;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private matchService: MatchServiceService) {
    }

  ngOnInit() {
    console.log('TEST-->', this.round);
    this.matchService.findByRound(this.round.uri).subscribe(
      matches => {
        this.matches = matches;
        this.matches.map(match => {
          if (match.hasWinner) {
            match.getRelation(Team, 'winner')
            .subscribe((team: Team) => {
              if (match.hasWinner) {
                match.winner = team;
              }
            });
          }
        });
      }
    );
  }
}
