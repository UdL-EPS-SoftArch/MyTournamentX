import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {Tournament} from '../models/tournament';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentServiceService extends RestService<Tournament> {

  constructor(injector: Injector) {
    super(Tournament, 'tournaments', injector);
  }

  public findTournamentByName(id: string): Observable<Tournament[]> {
    const options: any = {params: [{key: 'name', value: id}]};
    return this.search('findTournamentByName', options);
  }

  /*
  public existsByName(id: string): Boolean {
    const options: any = {params: [{key: 'name', value: id}]};
    return this.search('existsByName', options);
  }  
  */
}
