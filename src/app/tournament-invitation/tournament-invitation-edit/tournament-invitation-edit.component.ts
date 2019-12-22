import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TournamentInvitation } from 'src/app/shared/models/tournamentinvitation';
import { TournamentInvitationService } from 'src/app/tournament-invitation/tournament-invitation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tournament-invitation-edit',
  templateUrl: './tournament-invitation-edit.component.html',
  styleUrls: ['./tournament-invitation-edit.component.css']
})
export class TournamentInvitationEditComponent implements OnInit {
  public tournamentInvitation = new TournamentInvitation();
  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private route: ActivatedRoute, private tournamentInvitationService: TournamentInvitationService, private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tournamentInvitationService.get(id).subscribe(
      tournamentInvitation => this.tournamentInvitation = tournamentInvitation
    );
  }

  public onSubmit() {
    this.tournamentInvitationService.update(this.tournamentInvitation).subscribe(
      () => this.router.navigate(['']));
  }

  goBack() {
    this.location.back();
  }
}
