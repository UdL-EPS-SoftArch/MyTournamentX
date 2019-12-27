import { Component, OnInit } from '@angular/core';
import { Tournament } from '../tournament';
import { Router, ActivatedRoute } from '@angular/router';
import { TournamentServiceService } from '../tournament.service';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.css']
})
export class TournamentDetailComponent implements OnInit {

  public tournament: Tournament = new Tournament();

  constructor( private router: Router,
               private route: ActivatedRoute,
               private tournamentService: TournamentServiceService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tournamentService.get(id).subscribe(
      tournament => this.tournament = tournament );
  }
}
