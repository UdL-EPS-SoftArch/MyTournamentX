import { Resource } from '@lagoshny/ngx-hal-client';
import { Player } from 'src/app/shared/models/player';



export class Team extends Resource {
    id: string;
    name: string; // name of the team
    // ATRIBUTES
    level: string;
    game: string;
    maxPlayers: number;
    leader: Player;
    players: Player[];
    // URI
    uri: string;
    /*constructor(values: Object = {}){
        super();
        Object.assign(this,values);
    }*/
    constructor() {
        super();
    }
}
