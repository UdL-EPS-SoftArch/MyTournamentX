import { Resource } from '@lagoshny/ngx-hal-client';
import { Player } from '../shared/models/player';
import { Tournament } from '../shared/models/tournament';
import { Team } from '../shared/models/team';

export class TournamentInvitation extends Resource {
    id: number;
    createdAt: Date;
    message: string;
    invites: Player;
    createdBy: Player;
    invitesTo: Tournament;

    constructor() {
        super();
    }

}
