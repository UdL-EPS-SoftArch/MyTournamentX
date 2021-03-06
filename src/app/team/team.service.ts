import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Observable } from 'rxjs/internal/Observable';
import { Team } from './team';




@Injectable({
  providedIn: 'root'
})


export class TeamService extends RestService<Team> {

  private teamsUrl = 'http://localhost:8080/teams'; // URL to web api

  constructor(injector: Injector ) {
    super(Team, 'teams', injector); // 'teams' es el URI de la api
  }

  public findTeamByName(name: string): Observable <Team[]> {
    const options: any = {params: [{key: 'id', value: name}]};
    return this.search('findTeamByName', options);
  }
}

