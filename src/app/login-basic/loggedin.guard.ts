import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthenticationBasicService} from './authentication-basic.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private authentication: AuthenticationBasicService,
              private snackBar: MatSnackBar) {
  }

  canActivate(): boolean {
    if (!this.authentication.isLoggedIn()) {
      this.snackBar.open('You should be logged in to perform this action', 'Close');
    }
    return this.authentication.isLoggedIn();
  }
}
