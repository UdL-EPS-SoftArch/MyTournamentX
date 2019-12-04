import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {Tournament} from './tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentServiceService extends RestService<Tournament> {

  constructor(injector: Injector) {
    super(Tournament, 'tournaments', injector);
  }
}