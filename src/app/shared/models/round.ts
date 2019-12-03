import {Resource} from "@lagoshny/ngx-hal-client";
import {Team} from "./team";
import {Tournament} from "./tournament";

export class Round extends Resource {
  id: number;
  bestOf: number;
  numTeams: number;
  winner: Team;
  nextRound: Round;
  tournament: Tournament;

  constructor() {
    super();
  }
}
