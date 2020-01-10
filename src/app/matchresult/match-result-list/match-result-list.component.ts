import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatchResult} from '../../shared/models/matchresult';
import {MatchResultServiceService} from "../../shared/services/match-result-service.service";
import {matchResultService} from "../matchResult.service";
import {Player} from "../../shared/models/player";
import {Sort} from "@lagoshny/ngx-hal-client";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-match-result-list',
  templateUrl: './match-result-list.component.html',
  styleUrls: ['./match-result-list.component.css']
})
export class MatchResultListComponent implements OnInit {
  public matchResults: MatchResult[] = [];
  public pageSize = 10;
  private sorting: any;

  constructor(private router: Router,
              private matchResultsService: MatchResultServiceService) {
  }

  ngOnInit() {
    this.matchResultsService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
      (matchResults: MatchResult[]) => {
        this.matchResults = matchResults;
      });
  }

  changePage(event: PageEvent) {
    this.matchResultsService.page(event.pageIndex).subscribe(
      (matchResults: MatchResult[]) => this.matchResults = matchResults);
  }
}
