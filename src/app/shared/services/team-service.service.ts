import {Injectable, Injector} from '@angular/core';
import {RestService} from "@lagoshny/ngx-hal-client";
import {Team} from "../models/team";

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService extends RestService<Team> {

  constructor(injector: Injector) {
    super(Team, 'teams', injector);
  }
}
