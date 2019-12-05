import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  public team: Team = new Team();
  
  constructor( private router: Router, private route: ActivatedRoute,private teamService: TeamService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.teamService.get(id).subscribe( team => this.team = team);
  }


}
