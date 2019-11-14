import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '@lagoshny/ngx-hal-client';
import { Player } from './player';

@Injectable()
export class PlayerService extends RestService<Player> {

  constructor(injector: Injector) {
    super(Player, 'players', injector);
  }

  public findByUsernameContaining(text: string): Observable<Player[]> {
    const options: any = {params: [{key: 'text', value: text}]};
    return this.search('findByUsernameContaining', options);
  }
}
