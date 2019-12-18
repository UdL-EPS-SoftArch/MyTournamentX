import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {MatchResult} from '../models/matchresult';
import {Observable} from "rxjs";
import {Match} from "../models/match";

@Injectable({
  providedIn: 'root'
})
export class MatchResultServiceService extends RestService<MatchResult> {

  constructor(injector: Injector) {
    super(MatchResult, 'matchResults', injector);
  }
  public findById(uri: string): Observable<MatchResult[]> {
    const options: any = {params: [{key: 'id', value: uri}]};
    return this.search('findById', options);
  }
  public findByMatch(uri: string): Observable<MatchResult[]> {
    const options: any = {params: [{key: 'match', value: uri}]};
    return this.search('findByMatch', options);
  }
  public findByWinner(uri: string): Observable<MatchResult[]> {
    const options: any = {params: [{key: 'team', value: uri}]};
    return this.search('findByWinner', options);
  }
  public findByMatchAndSender(uri: string): Observable<MatchResult[]> {
    const options: any = {params: [{key: 'match', value: uri}, {key: 'team', value: uri}]};
    return this.search('findByMatchAndSender', options);
  }
}
