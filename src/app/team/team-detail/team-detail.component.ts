import { Component, OnInit } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  public team: Team = new Team();
  
  constructor() { }

  ngOnInit() {
  }

}
