import { Component, OnInit } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  public teams: Team [];
  constructor() { }

  ngOnInit() {
  }

}
