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

  constructor( private router: Router,private teamService:TournamentServiceService) { }

  ngOnInit() {
    this.tournament = new Tournament();
  }


  onSubmit():void{
    this.teamService.create(this.tournament).subscribe((team: Tournament) => this.router.navigate(['/tournaments'])); // ruta API-post
  }
  
}