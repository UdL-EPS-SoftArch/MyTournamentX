import { Component, OnInit } from '@angular/core';
import { TournamentInvitation } from 'src/app/shared/models/tournamentinvitation';
import { Router } from '@angular/router';
import { TournamentInvitationService } from 'src/app/tournament-invitation/tournament-invitation.service';
import { Team } from 'src/app/shared/models/team';
import { TeamService } from 'src/app/team/team.service';
import { Tournament } from 'src/app/shared/models/tournament';
import { TournamentServiceService } from 'src/app/shared/services/tournament-service.service';

@Component({
  selector: 'app-tournament-invitation-create',
  templateUrl: './tournament-invitation-create.component.html',
  styleUrls: ['./tournament-invitation-create.component.css']
})
export class TournamentInvitationCreateComponent implements OnInit {

  public tournamentInvitation: TournamentInvitation = new TournamentInvitation();
  public teams: Team[] = [];
  public listTournament: Tournament[] = [];
  public selectedTeam: string;

  // tslint:disable-next-line: max-line-length
  constructor( private router: Router, private tournamentService: TournamentServiceService , private teamService: TeamService, private tournamentinvitationService: TournamentInvitationService ) { }

  ngOnInit() {
    this.tournamentService.getAll()
    .subscribe((listTournament: Tournament[]) => {this.listTournament = listTournament; });

    this.teamService.getAll()
    .subscribe((teams: Team[]) => {this.teams = teams; });

   // this.tournamentInvitation = new TournamentInvitation();
  }

  onSubmit(): void {
    // tslint:disable-next-line: max-line-length
    this.tournamentinvitationService.create(this.tournamentInvitation).subscribe((tournamentInvitations: TournamentInvitation) => this.router.navigate([''])); // apartir de => ruta del client-site
  }

}
