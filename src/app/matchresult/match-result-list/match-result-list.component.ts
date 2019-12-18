import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatchResult} from '../../shared/models/matchresult';
import {MatchResultServiceService} from "../../shared/services/match-result-service.service";

@Component({
  selector: 'app-match-result-list',
  templateUrl: './match-result-list.component.html',
  styleUrls: ['./match-result-list.component.css']
})
export class MatchResultListComponent implements OnInit {
  matchResults: MatchResult[];

  @Input() matchId: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private matchResultService: MatchResultServiceService)  { }

  ngOnInit() {
    this.matchResultService.findByMatch('matchresults/' +this.matchId).subscribe(
      matchresults =>{
      this.matchResults = matchresults;
      }
    );
  }
}
