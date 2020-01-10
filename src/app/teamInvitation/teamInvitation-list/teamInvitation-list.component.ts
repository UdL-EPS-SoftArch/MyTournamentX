import { Component, OnInit, Injectable } from '@angular/core';
import { TeamInvitation } from '../../shared/models/teaminvitation';
import {TeamInvitationServiceService} from '../../shared/services/team-invitation-service.service';

@Component({
  selector: 'app-teamInvitation-list',
  templateUrl: './teamInvitation-list.component.html',
  styleUrls: ['./teamInvitation-list.component.css']
})

@Injectable()
export class TeamInvitationListComponent implements OnInit {

  public teamInvitationList: TeamInvitation [] = [];
  public totalInvitations = 0;
  displayedColumns: string [] = ['id', 'player', 'team']; // matColumnDef values

  constructor(private teamInvitationServices: TeamInvitationServiceService) {}

  ngOnInit() {
    this.teamInvitationServices.getAll()
      .subscribe(
        (teamInvitationList: TeamInvitation[]) => {
          this.teamInvitationList = teamInvitationList;
          this.totalInvitations = teamInvitationList.length;
        });
  }
}
