import {Injectable, Injector} from '@angular/core';
import {RestService} from "@lagoshny/ngx-hal-client";
import {Match} from "../models/match";

@Injectable({
  providedIn: 'root'
})
export class MatchServiceService extends RestService<Match> {

  constructor(injector: Injector) {
    super(Match, 'matches', injector)
  }
}
