import {Injectable, Injector} from '@angular/core';
import {RestService} from "@lagoshny/ngx-hal-client";
import {TournamentInvitation} from "../models/tournamentinvitation";

@Injectable({
  providedIn: 'root'
})
export class TournamentInvitationServiceService extends RestService<TournamentInvitation> {

  constructor(injector: Injector) {
    super(TournamentInvitation, 'tournamentInvitations', injector);
  }
}
