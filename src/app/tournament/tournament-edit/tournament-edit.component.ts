import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament } from '../tournament';
import { TournamentServiceService } from '../tournament.service';

@Component({
  selector: 'app-tournament-edit',
  templateUrl: './tournament-edit.component.html',
  styleUrls: ['./tournament-edit.component.css']
})
export class TournamentEditComponent implements OnInit {

  public tournament: Tournament = new Tournament();

  constructor(private route: ActivatedRoute,
              private tournamentService: TournamentServiceService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tournamentService.get(id).subscribe(tournament => this.tournament = tournament );
  }

  public onSubmit(): void {
    this.tournamentService.update(this.tournament).subscribe(
      (tournament: Tournament) => this.router.navigate[tournament.uri]);
  }

  goBack() {
    this.location.back();
  }
}
