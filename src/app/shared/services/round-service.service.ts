import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {Round} from '../models/round';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoundServiceService extends RestService<Round> {

  constructor(injector: Injector) {
    super(Round, 'rounds', injector);
  }

  public findByTournament(uri: string): Observable<Round[]> {
    const options: any = {params: [{key: 'tournament', value: uri}]};
    return this.search('findByTournament', options);
  }
}
