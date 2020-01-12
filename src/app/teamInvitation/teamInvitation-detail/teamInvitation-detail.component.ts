import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamInvitationServiceService } from '../../shared/services/team-invitation-service.service';
import { TeamInvitation } from '../../shared/models/teaminvitation';
import { User } from '../../shared/models/user';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-team-invitation-detail',
  templateUrl: './teamInvitation-detail.component.html'
})
export class TeamInvitationDetailComponent implements OnInit {
  public teamInvitation: TeamInvitation = new TeamInvitation();

  constructor(private route: ActivatedRoute,
              private teamInvitationServiceService: TeamInvitationServiceService,
              private authenticationService: AuthenticationBasicService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.teamInvitationServiceService.get(id).subscribe(teamInvitation => this.teamInvitation = teamInvitation);
  }

  public delete() {
    this.teamInvitationServiceService.delete(this.teamInvitation).subscribe(() => this.router.navigateByUrl('/'));
  }

  public getCurrentUser(): User {
    return this.authenticationService.getCurrentUser();
  }
}
