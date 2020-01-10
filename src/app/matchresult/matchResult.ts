import { Resource } from '@lagoshny/ngx-hal-client';
import { Player } from 'src/app/shared/models/player';
import {Match} from '../shared/models/match';
import {Team} from '../shared/models/team';



export class MatchResult extends Resource {
  id: string;
  winner: Team; // name of the team
  // ATRIBUTES
  sender: Team;
  match: Match;
  description: string;
  uri: string;
  constructor() {
    super();
  }
}
