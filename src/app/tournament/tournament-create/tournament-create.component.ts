import { Component, OnInit, Injectable } from '@angular/core';
import { Tournament } from '../tournament';
import { Router } from '@angular/router';
import { TournamentServiceService } from '../tournament.service';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})

export class TournamentCreateComponent implements OnInit {

  public tournament: Tournament;

  constructor( private router: Router,private tournamentService:TournamentServiceService) { }

  ngOnInit() {
    this.tournament = new Tournament();
  }


  onSubmit():void{
    this.tournamentService.create(this.tournament).subscribe((tournament: Tournament) => this.router.navigate(['/tournaments'])); // ruta API-post
  }
  
}