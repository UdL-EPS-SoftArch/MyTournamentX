import {Resource} from "@lagoshny/ngx-hal-client";
import {Player} from "./player";
import {Tournament} from "./tournament";

export class TournamentInvitation extends Resource {
  id: number;
  createdAt: Date;
  invites: Player;
  createdBy: Player;
  invitesTo: Tournament;
  message: string;

  constructor() {
    super();
  }
}
