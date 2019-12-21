import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentInvitation } from 'src/app/shared/models/tournamentinvitation';
import { TournamentInvitationServiceService } from 'src/app/shared/services/tournament-invitation-service.service';

@Component({
  selector: 'app-tournament-invitation-detail',
  templateUrl: './tournament-invitation-detail.component.html',
  styleUrls: ['./tournament-invitation-detail.component.css']
})
export class TournamentInvitationDetailComponent implements OnInit {
  public tournamentInvitation = new TournamentInvitation();

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private tournamentInvitationService: TournamentInvitationServiceService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tournamentInvitationService.get(id).subscribe(tournamentInvitation => this.tournamentInvitation = tournamentInvitation);
  }

}
