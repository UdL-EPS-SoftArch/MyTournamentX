import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Observable } from 'rxjs/internal/Observable';
import { MatchResult } from './matchResult';
import {Match} from "../shared/models/match";




@Injectable({
  providedIn: 'root'
})


export class matchResultService extends RestService<MatchResult> {

  private teamsUrl = 'http://localhost:8080/matchresults'; // URL to web api

  constructor(injector: Injector ) {
    super(MatchResult, 'matchresults', injector); // 'teams' es el URI de la api
  }

  public findByMatch(match: string): Observable<MatchResult[]> {
    //const options: any = {params: [{key: 'id', value: name}]};
    return this.search('findByMatch');
  }
}

