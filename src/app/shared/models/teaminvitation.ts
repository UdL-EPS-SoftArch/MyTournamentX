import {Resource} from '@lagoshny/ngx-hal-client';
import {Team} from './team';

export class TeamInvitation extends Resource {
  id: string;
  message: string;
  team: Team;
  accepted: boolean;
  creationDate: Date;

  constructor() {
    super();
  }
}
