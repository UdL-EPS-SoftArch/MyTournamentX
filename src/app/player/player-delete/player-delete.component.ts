import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';
import {Player} from '../../shared/models/player';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html'
})
export class PlayerDeleteComponent implements OnInit {
  public player: Player = new Player();
  private id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.playerService.get(this.id).subscribe(
      player => this.player = player);
  }

  delete() {
    this.playerService.delete(this.player).subscribe(
      () => this.router.navigate(['players']));
  }
}
