import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})

@Injectable()
export class TeamListComponent implements OnInit {
  
  public teamList: Team [] = [];
  public totalTeams = 0;
  displayedColumns: string [] = ['id', 'game', 'level', 'maxPlayers']; // matColumnDef values

  constructor(private teamService: TeamService) { 
    
  }

  ngOnInit() {
    this.teamService.getAll()
    .subscribe(
      (teamsList: Team[]) => {
        this.teamList = teamsList; 
        this.totalTeams = teamsList.length;
       })
  }

}
