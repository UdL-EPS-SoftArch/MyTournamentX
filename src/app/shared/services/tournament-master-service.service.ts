import {Injectable, Injector} from '@angular/core';
import {RestService} from "@lagoshny/ngx-hal-client";
import {TournamentMaster} from "../models/tournamentmaster";

@Injectable({
  providedIn: 'root'
})
export class TournamentMasterServiceService extends RestService<TournamentMaster> {

  constructor(injector: Injector) {
    super(TournamentMaster, 'tournamentMasters', injector);
  }
}
