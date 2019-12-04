import { Component, OnInit, Injectable } from '@angular/core';
import { Team } from '../team';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})

export class TeamCreateComponent implements OnInit {

  public team: Team;

  constructor( private router: Router,private teamService:TeamService) { }

  ngOnInit() {
    this.team = new Team();
  }


  onSubmit():void{
    this.teamService.create(this.team).subscribe((team: Team) => this.router.navigate(['/teams'])); // ruta API-post
  }
  
}
