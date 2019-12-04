import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {TeamInvitation} from '../models/teaminvitation';

@Injectable({
  providedIn: 'root'
})
export class TeamInvitationServiceService extends RestService<TeamInvitation> {

  constructor(injector: Injector) {
    super(TeamInvitation, 'teamInvitations', injector);
  }
}
