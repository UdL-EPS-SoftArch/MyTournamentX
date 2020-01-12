import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TournamentServiceService} from '../../shared/services/tournament-service.service';
import {Tournament} from '../../shared/models/tournament';

@Component({
  selector: 'app-tournament-detail',
  styleUrls: ['tournament-detail.component.css'],
  templateUrl: './tournament-detail.component.html'
})
export class TournamentDetailComponent implements OnInit {
  tournament?: Tournament;
  id = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private tournamentService: TournamentServiceService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.tournamentService.get(this.id).subscribe(tournament => {
      this.tournament = tournament;
      console.log(tournament);
    });
  }
}
