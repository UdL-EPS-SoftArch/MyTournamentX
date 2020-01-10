import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TeamInvitationServiceService} from '../../shared/services/team-invitation-service.service';
import {TeamInvitation} from '../../shared/models/teaminvitation';
import {Team} from '../../shared/models/team';
import { TeamService } from 'src/app/team/team.service';
import { PlayerService } from 'src/app/player/player.service';
import {Player} from '../../shared/models/player';

@Component({
  selector: 'app-team-invitation-create',
  templateUrl: '../teamInvitation-form/teamInvitation-form.component.html'
})

export class TeamInvitationCreateComponent implements OnInit {
  public teamInvitation: TeamInvitation;
  public teams: Team[] = [];
  public players: Player[] = [];

  constructor(
    private router: Router,
    private teamInvitationServiceService: TeamInvitationServiceService,
    private teamService: TeamService,
    private playerService: PlayerService) {}

  ngOnInit() {
    this.teamService.getAll()
      .subscribe((teams: Team[]) => {this.teams = teams; });

    this.playerService.getAll()
      .subscribe((players: Player[]) => {this.players = players; });
    this.teamInvitation = new TeamInvitation();
  }

  onSubmit(): void {
    this.teamInvitationServiceService.create(this.teamInvitation).subscribe(
      (teamInvitation: TeamInvitation) => this.router.navigate(['teamInvitations']));
  }
}
