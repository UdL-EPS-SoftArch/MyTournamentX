import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlayerService } from '../player.service';
import { User } from '../../login-basic/user';
import { Player } from '../player';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html'
})

export class PlayerSearchComponent {
  @Input() users: User[];
  @Output() emitResults: EventEmitter<any> = new EventEmitter();

  constructor(private playerService: PlayerService) {
  }

  performSearch(text: string): void {
    this.playerService.findByUsernameContaining(text)
      .subscribe(
        (players: Player[]) => this.emitResults.emit(
          players.sort((a, b) => a.username.localeCompare(b.username))));
  }
}

