import { Component, OnInit } from '@angular/core';
import { TournamentServiceService } from '../tournament.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tournament } from '../tournament';

@Component({
  selector: 'app-tournament-delete',
  templateUrl: './tournament-delete.component.html',
  styleUrls: ['./tournament-delete.component.css']
})
export class TournamentDeleteComponent implements OnInit {

  public tournament: Tournament = new Tournament();
  constructor(private router: Router, private route: ActivatedRoute, private tournamentService: TournamentServiceService ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.tournamentService.get(id).subscribe(tournament => this.tournament = tournament);
  }

  delete() {
    this.tournamentService.delete(this.tournament).subscribe(
      () => this.router.navigate(['tournament']));
  }
}