import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../../shared/models/player';
import { Sort } from '@lagoshny/ngx-hal-client';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html'
})
export class PlayerListComponent implements OnInit {
  public players: Player[] = [];
  public pageSize = 10;
  public totalPlayers = 0;
  private sorting: Sort[] = [{ path: 'username', order: 'ASC' }];

  constructor(private router: Router,
              private playerService: PlayerService) {
  }

  ngOnInit() {
    this.playerService.getAll({size: this.pageSize, sort: this.sorting}).subscribe(
        (players: Player[]) => {
          this.players = players;
          this.totalPlayers = this.playerService.totalElement();
        });
  }

  changePage(event: PageEvent) {
    this.playerService.page(event.pageIndex).subscribe(
      (players: Player[]) => this.players = players);
  }
}
