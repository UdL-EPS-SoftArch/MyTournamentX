import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { Player } from '../../shared/models/player';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html'
})
export class PlayerDetailComponent implements OnInit {
  public player: Player = new Player();

  constructor(private route: ActivatedRoute,
              private playerService: PlayerService,
              private authenticationService: AuthenticationBasicService,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerService.get(id).subscribe(player => this.player = player);
  }

  public delete() {
    this.playerService.delete(this.player).subscribe(() => this.router.navigateByUrl('/'));
  }
}
