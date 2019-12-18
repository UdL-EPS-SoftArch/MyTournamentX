import { Injectable, Injector } from '@angular/core';
import { TournamentInvitation } from '../shared/models/tournamentinvitation';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TournamentInvitationService extends RestService<TournamentInvitation> {

  constructor(injector: Injector) {
    super(TournamentInvitation, 'tournamentinvitation', injector);
   }

   public findTournamentInvitationByMessage(message: string): Observable <TournamentInvitation[]> {
    const options: any = {params: [{key: 'id', value: message}]};
    return this.search('findTournamentInvitationByMessage', options);
   }
}
