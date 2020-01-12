import {Resource} from '@lagoshny/ngx-hal-client';
import {Team} from './team';
import {User} from './user';

export class TeamInvitation extends Resource {
  id: string;
  message: string;
  team: Team;
  username: User;
  accepted: boolean;
  creationDate: Date;

  constructor() {
    super();
  }
}
