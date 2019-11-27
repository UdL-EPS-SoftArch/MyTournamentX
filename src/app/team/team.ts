import { Resource } from '@lagoshny/ngx-hal-client';
import { Injectable } from '@angular/core';

@Injectable()
export class Team extends Resource{
    
    id:string; //name of the team
    
    //ATRIBUTES
    level:string;
    game:string;
    maxPlayers:number;
    
    //URI
    uri: string;

}
