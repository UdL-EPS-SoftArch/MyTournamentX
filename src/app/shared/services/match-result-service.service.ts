import {Injectable, Injector} from '@angular/core';
import {RestService} from "@lagoshny/ngx-hal-client";
import {MatchResult} from "../models/matchresult";

@Injectable({
  providedIn: 'root'
})
export class MatchResultServiceService extends RestService<MatchResult> {

  constructor(injector: Injector) {
    super(MatchResult, 'matchResults', injector);
  }
}
