import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../team';

@Component({
  selector: 'app-team-delete',
  templateUrl: './team-delete.component.html',
  styleUrls: ['./team-delete.component.css']
})
export class TeamDeleteComponent implements OnInit {

  public team: Team = new Team();
  constructor(private router: Router, private route: ActivatedRoute, private teamService: TeamService ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.teamService.get(id).subscribe(team => this.team = team);
  }

  delete() {
    this.teamService.delete(this.team).subscribe(
      () => this.router.navigate(['teams']));
  }
}
