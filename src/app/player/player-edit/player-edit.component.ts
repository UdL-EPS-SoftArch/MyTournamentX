import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {PlayerService} from '../player.service';
import {Player} from '../player';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: '../player-form/player-form.component.html'
})
export class PlayerEditComponent implements OnInit {
  public player: Player = new Player();
  public editing = true;
  public registering = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private playerService: PlayerService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerService.get(id).subscribe(
      player => this.player = player);
  }

  onSubmit(): void {
    this.player.authorities = []; // This field is not editable
    this.playerService.update(this.player)
      .subscribe(
        (player: Player) => this.router.navigate([player.uri]));
  }

  getCurrentUserId(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
