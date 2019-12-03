import { Component, OnInit } from '@angular/core';
import { AuthenticationBasicService } from './authentication-basic.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user: User;

  constructor(private authenticationService: AuthenticationBasicService,
              private location: Location,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(loginForm: NgForm): void {
    this.authenticationService.login(loginForm.controls.username.value, loginForm.controls.password.value)
      .subscribe(
        user => {
          this.authenticationService.storeCurrentUser(user);
          this.snackBar.open('Signed in successfully', 'Close');
          this.router.navigateByUrl('');
        }, () => {
          this.snackBar.open('Incorrect username or password', 'Close');
        });
  }

  onCancel(): void {
    this.location.back();
  }
}
