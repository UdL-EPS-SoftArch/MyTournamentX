import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../../shared/models/player';

@Component({
  selector: 'app-player-register',
  templateUrl: '../player-form/player-form.component.html'
})
export class PlayerRegisterComponent implements OnInit {
  public player: Player;
  public registering = true;

  constructor(private router: Router,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    this.player = new Player();
  }

  onSubmit(): void {
    this.playerService.create(this.player).subscribe(
      (player: Player) => this.router.navigate(['/login']));
  }
}
