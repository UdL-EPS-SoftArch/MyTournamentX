import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationBasicService } from './authentication-basic.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class PlayerGuard implements CanActivate {

  constructor(private authentication: AuthenticationBasicService,
              private snackBar: MatSnackBar) {
  }

  canActivate(): boolean {
    if (!this.authentication.isLoggedIn() || !this.authentication.isUserInRole('player')) {
      this.snackBar.open('You should be a player to perform this action', 'Close');
    }
    return this.authentication.isLoggedIn() && this.authentication.isUserInRole('player');
  }
}
