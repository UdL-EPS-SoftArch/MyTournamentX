import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatchServiceService } from '../../shared/services/match-service.service'
import { Match } from '../../shared/models/match';
import { Round } from '../../shared/models/round';

@Component({
  selector: 'app-match-list',
  styleUrls: ['match-list.component.css'],
  templateUrl: './match-list.component.html'
})
export class MatchListComponent implements OnInit {
    private matches: Match[];
    private round: Round = new Round();

    constructor(private route: ActivatedRoute,
                private router: Router,
                //private round: Round,
                private matchService: MatchServiceService) {
    }

  ngOnInit() {
    this.round.uri = 'http://localhost:8080/rounds/1';


    this.matchService.findByRound(this.round.uri).subscribe(
      matches => {
        console.log(this.matches);
        /*
        matches.map(match => {
          this.matchService.findById(match.uri).subscribe(
            matchObject => {
               this.matches.push(matchObject[0]);
               console.log(matchObject);
               console.log(this.matches);
            }
          );
        });*/
      });
  }
}

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
