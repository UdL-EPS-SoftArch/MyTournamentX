import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {Match} from '../models/match';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchServiceService extends RestService<Match> {

  constructor(injector: Injector) {
    super(Match, 'matches', injector);
  }

  public findByRound(text: string): Observable<Match[]> {
    const options: any = {params: [{key: 'text', value: text}]};
    return this.search('findByRound', options);
  }
}
