import {Resource} from '@lagoshny/ngx-hal-client';

export class TeamInvitation extends Resource {
  id: string;
  message: string;
  accepted: boolean;
  creationDate: Date;

  constructor() {
    super();
  }
}
