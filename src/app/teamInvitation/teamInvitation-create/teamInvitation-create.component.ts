import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TeamInvitationServiceService} from '../../shared/services/team-invitation-service.service';
import {TeamInvitation} from '../../shared/models/teaminvitation';


@Component({
  selector: 'app-teamInvitation-create',
  templateUrl: '../teamInvitation-form/teamInvitation-form.component.html'
})

export class TeamInvitationCreateComponent implements OnInit {
  public teamInvitation: TeamInvitation = new TeamInvitation();

  constructor(
    private router: Router,
    private teamInvitationServiceService: TeamInvitationServiceService) {}

  ngOnInit() {
    this.teamInvitation = new TeamInvitation();
  }

  onSubmit(): void {
    this.teamInvitationServiceService.create(this.teamInvitation).subscribe(
      (teamInvitation: TeamInvitation) => this.router.navigate(['players']));
  }
}
