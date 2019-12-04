import { Resource } from '@lagoshny/ngx-hal-client'

export class Tournament extends Resource{
    
    id: string; //name of the tournament

    //Atributes
    game: string;
    type: string;
    description:string;
    minParticipants: number;
    maxParticipants: number;
    minTeamsPlayers: number;
    maxTeamsPlayers: number;
    limitDate: Date;


    constructor(){
        super();
        enum level{
            Begginner = "BEGGINNER",
            Amateur = "AMATEUR",
            Professional = "PROFESSIONAL",
        }
    }
}


