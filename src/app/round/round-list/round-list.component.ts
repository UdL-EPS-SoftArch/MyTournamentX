import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RoundServiceService } from '../../shared/services/round-service.service';
import { Round } from '../../shared/models/round';

@Component({
  selector: 'app-round-list',
  styleUrls: ['round-list.component.css'],
  templateUrl: './round-list.component.html'
})
export class RoundListComponent implements OnInit {
    private rounds: Round[];

    @Input() tournamentId: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private roundService: RoundServiceService) {
    }

  ngOnInit() {
    this.roundService.findByTournament('tournaments/' + this.tournamentId).subscribe(
      rounds => {
        this.rounds = rounds;
      }
    );
  }
}
