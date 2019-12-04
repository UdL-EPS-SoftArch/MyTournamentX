import {Resource} from '@lagoshny/ngx-hal-client';
import {Player} from './player';

export class Team extends Resource {
  name: string;
  game: string;
  level: string;
  maxPlayers: number;
  leader: Player;
  players: Player[];

  constructor() {
    super();
  }
}
