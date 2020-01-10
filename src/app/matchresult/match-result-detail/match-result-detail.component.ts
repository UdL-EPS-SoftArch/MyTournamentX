import { Component, OnInit } from '@angular/core';
import {Team} from "../../team/team";
import {ActivatedRoute, Router} from "@angular/router";
import {TeamService} from "../../team/team.service";
import {Player} from "../../shared/models/player";
import {MatchResult} from "../../shared/models/matchresult";
import {MatchResultServiceService} from "../../shared/services/match-result-service.service";
import {Match} from "../../shared/models/match";

@Component({
  selector: 'app-match-result-detail',
  templateUrl: './match-result-detail.component.html',
  styleUrls: ['./match-result-detail.component.css']
})
export class MatchResultDetailComponent implements OnInit {

  public matchResult: MatchResult = new MatchResult();

  constructor(private router: Router, private route: ActivatedRoute, private matchResultService: MatchResultServiceService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.matchResultService.get(id).subscribe((matchResult: MatchResult) => {
      this.matchResult = matchResult;
      matchResult.getRelation(Match, 'match').subscribe((match: Match) => this.matchResult.match = match);
      matchResult.getRelation(Team, 'winner').subscribe((winner: Team) => this.matchResult.winner = winner);
      matchResult.getRelation(Team, 'sender').subscribe((sender: Team) => this.matchResult.sender = sender);
    });
  }
}
