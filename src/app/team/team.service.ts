import { Injectable,Injector } from '@angular/core';
import{Team} from './team'
import { RestService } from '@lagoshny/ngx-hal-client';
import {Observable} from  'rxjs/internal/Observable';




@Injectable({
  providedIn: 'root'
})


export class TeamService extends RestService<Team>{
  
  

  private teamsUrl = 'http://localhost:8080/teams'; //URL to web api

  constructor(injector: Injector ) {
    super(Team,'teams',injector); 
  }

  public findTeamByName(name:string): Observable <Team[]> {
    const options: any = {params: [{key: 'id',value:name}]};
    return this.search('findTeamByName',options);
  }

 /* public findAll(): Observable <Team[]>{
    const options: any = {params: [{key: 'id',value:name}]};
    return this.search('findAll', options);
  }*/

  

}

