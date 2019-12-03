import {Resource} from "@lagoshny/ngx-hal-client";
import {Team} from "./team";
import {Match} from "./match";

export class MatchResult extends Resource {
  id: number;
  description: string;
  winner: Team;
  match: Match;
  sender: Team;

  constructor() {
    super();
  }
}
