import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RoundServiceService } from '../../shared/services/round-service.service';
import { Round } from '../../shared/models/round';
import { Team } from 'src/app/shared/models/team';

@Component({
  selector: 'app-round-detail',
  styleUrls: ['round-detail.component.css'],
  templateUrl: './round-detail.component.html'
})
export class RoundDetailComponent implements OnInit {
    round: Round;
    id =  '';
    constructor(private route: ActivatedRoute,
                private router: Router,
                private roundService: RoundServiceService) {
    }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.roundService.get(this.id).subscribe(round => {
        this.round = round;
        round.getRelationArray(Team, 'rivals')
        .subscribe((teams: Team[]) => {
            round.rivals = teams;

            round.rivals.map((rival, index) => {
                rival.getRelation(Team, 'team')
                .subscribe((team: Team) => {
                    round.rivals[index] = team;
                });
            });
        });
    });
  }
}
