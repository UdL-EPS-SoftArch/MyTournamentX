import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {PlayerService} from '../player.service';
import {User} from '../../login-basic/user';
import {Player} from '../player';
import {AuthenticationBasicService} from '../../login-basic/authentication-basic.service';
import { routes } from 'src/app/login-basic/login-basic.routing';

@Component({
  selector: 'app-player-edit',
  templateUrl: '../player-form/player-form.component.html'
})
export class PlayerEditComponent implements OnInit {
  public player: Player = new Player();
  public editing = true;

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

  onChange() {
    this.player.passwordReset = !this.player.passwordReset;
  }

  onSubmit(): void {
    this.player.authorities = []; // This field is not editable
    this.playerService.update(this.player)
      .subscribe(
        (player: Player) => {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        });
  }

  getCurrentUserId(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}
