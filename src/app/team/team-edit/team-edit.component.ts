import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';
import {Location} from '@angular/common';



@Component({
  selector: 'app-team-edit',
  templateUrl: './team-edit.component.html',
  styleUrls: ['./team-edit.component.css']
})
export class TeamEditComponent implements OnInit {

  public team: Team = new Team();

  constructor(private route: ActivatedRoute, private teamService: TeamService,private router: Router, private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.teamService.get(id).subscribe(team =>{this.team=team});
  }

  public onSubmit():void{
    this.teamService.update(this.team).subscribe((team: Team)=> this.router.navigate[team.uri]);
  }
  goBack() {
    this.location.back();
  }
}
