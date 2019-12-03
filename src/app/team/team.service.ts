import { Injectable,Injector } from '@angular/core';
import{Team} from './team'
import { RestService } from '@lagoshny/ngx-hal-client';
import {Observable} from  'rxjs';




/*@Injectable({
  providedIn: 'root'
})*/

@Injectable()
export class TeamService extends RestService<Team>{
  
  

  private teamsUrl = 'http://localhost:8080/teams'; //URL to web api

  constructor(injector: Injector ) {
    super(Team,'teams',injector); 
  }

}

