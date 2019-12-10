import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from '../team.service';
import { flatMap } from 'rxjs/operators';
import { Player } from 'src/app/shared/models/player';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  public team: Team = new Team();
  // public leader: Player= new Player();

  constructor( private router: Router, private route: ActivatedRoute, private teamService: TeamService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.teamService.get(id).pipe(
      flatMap(team => {
        this.team = team;
        return team.getRelation(Player, 'teamLeader');
       }),
       // flatMap(leader => this.team)
    ).subscribe( );
  }


}
