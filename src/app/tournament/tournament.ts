import {Resource} from '@lagoshny/ngx-hal-client';
import {Team} from '../shared/models/team';

export class Tournament extends Resource {
  id: string;
  name: string;
  level: string;
  game: string;
  type: string;
  description: string;
  minParticipants: number;
  maxParticipants: number;
  minTeamPlayers: number;
  maxTeamPlayers: number;
  state: string;
  participants: Team[];
  bestOf: number;
  finishedAt: Date;
  startAt: Date;
  createdAt: Date;
  limitDate: Date;

  constructor() {
    super();
  }
}
