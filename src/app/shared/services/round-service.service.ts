import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {Round} from '../models/round';

@Injectable({
  providedIn: 'root'
})
export class RoundServiceService extends RestService<Round> {

  constructor(injector: Injector) {
    super(Round, 'rounds', injector);
  }
}
