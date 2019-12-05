import { Component, OnInit, Input, Output, Injectable } from '@angular/core';
import { Tournament } from '../tournament';
import { TournamentServiceService } from '../tournament.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})

@Injectable()
export class TournamentListComponent implements OnInit {
  
  public tournamentList: Tournament [] = [];
  public totalTournaments = 0;
  displayedColumns: string [] = ['id', 'level', 'game','state','bestOf']; // matColumnDef values

  constructor(private tournamentService: TournamentServiceService) { 
    
  }

  ngOnInit() {
    this.tournamentService.getAll()
    .subscribe(
      (tournamentsList: Tournament[]) => {
        this.tournamentList = tournamentsList; 
        this.totalTournaments = tournamentsList.length;
       })
  }

}