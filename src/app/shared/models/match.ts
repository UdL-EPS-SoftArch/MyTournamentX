import {Resource} from '@lagoshny/ngx-hal-client';
import {Team} from './team';
import {Round} from './round';

export class Match extends Resource {
  id: number;
  description: string;
  winner: Team;
  round: Round;
  uri: string;

  constructor() {
    super();
  }
}
