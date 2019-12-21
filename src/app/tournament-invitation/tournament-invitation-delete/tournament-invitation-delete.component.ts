import { Component, OnInit } from '@angular/core';
import { TournamentInvitation } from 'src/app/shared/models/tournamentinvitation';
import { Router, ActivatedRoute } from '@angular/router';
import { TournamentInvitationService } from '../tournament-invitation.service';
import { TournamentServiceService } from 'src/app/shared/services/tournament-service.service';

@Component({
  selector: 'app-tournament-invitation-delete',
  templateUrl: './tournament-invitation-delete.component.html',
  styleUrls: ['./tournament-invitation-delete.component.css']
})
export class TournamentInvitationDeleteComponent implements OnInit {

  public tournamentInvitation: TournamentInvitation = new TournamentInvitation();

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private tournamentService: TournamentServiceService , private tournamentinvitationService: TournamentInvitationService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tournamentinvitationService.get(id).subscribe(
      tournamentInvitation => this.tournamentInvitation = tournamentInvitation
    ); }

    delete() {
      this.tournamentinvitationService.delete(this.tournamentInvitation).subscribe(
        () => this.router.navigate(['']));

  }

}
