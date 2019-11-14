import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './login-basic.routing';
import { LoginNavbarComponent } from './login-navbar.component';
import { LoginFormComponent } from './login-form.component';
import { AuthenticationBasicService } from './authentication-basic.service';
import { ErrorHandlerModule } from '../error-handler/error-handler.module';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ErrorHandlerModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
  ],
  providers: [AuthenticationBasicService],
  declarations: [LoginNavbarComponent, LoginFormComponent],
  exports: [LoginNavbarComponent]
})
export class LoginBasicModule {
}
