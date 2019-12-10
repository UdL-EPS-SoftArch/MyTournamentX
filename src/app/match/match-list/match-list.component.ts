import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatchServiceService } from '../../shared/services/match-service.service'
import { Match } from '../../shared/models/match';
import { Round } from '../../shared/models/round';
import { Team } from 'src/app/shared/models/team';

@Component({
  selector: 'app-match-list',
  styleUrls: ['match-list.component.css'],
  templateUrl: './match-list.component.html'
})
export class MatchListComponent implements OnInit {
    private matches: Match[] = [{} as Match, {} as Match];
    private round: Round = new Round();

    constructor(private route: ActivatedRoute,
                private router: Router,
                //private round: Round,
                private matchService: MatchServiceService) {
                  this.round.uri = "/rounds/1";
                  this.round.bestOf = 3;
                  this.round.numTeams = 2;
    }

  ngOnInit() {
/*
    const team1 = new Team();
    team1.name = "Patata 1";

    const team2 = new Team();
    team2.name = "Patata 2";


    this.round.numTeams = 2;
    this.round.rivals = [team1, team2];

    const match = this.matches[0];
    match.round = this.round;
    match.winner = this.round.rivals[0];

    this.matches[1] = this.matches[0];
*/

    this.matchService.findByRound(this.round.uri).subscribe(
      matches => this.matches = matches);

  }
}
