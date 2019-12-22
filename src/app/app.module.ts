import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxHalClientModule } from '@lagoshny/ngx-hal-client';
import { ExternalConfigurationService } from './external-configuration-service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatListModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { HttpErrorInterceptor } from './error-handler/http-error-interceptor';
import { LoginBasicModule } from './login-basic/login-basic.module';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { PlayerGuard } from './login-basic/player.guard';
import { AuthInterceptor } from './login-basic/auth-interceptor';

import { AuthenticationBasicService } from './login-basic/authentication-basic.service';
import { PlayerService } from './player/player.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { PlayerRegisterComponent } from './player/player-register/player-register.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerSearchComponent } from './player/player-search/player-search.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TeamListComponent } from './team/team-list/team-list.component';
import { TeamDetailComponent } from './team/team-detail/team-detail.component';
import { MatTableModule } from '@angular/material/table';
import { TeamEditComponent } from './team/team-edit/team-edit.component';
import { TeamCreateComponent } from './team/team-create/team-create.component';
import { TeamDeleteComponent } from './team/team-delete/team-delete.component';
import { MatSelectModule } from '@angular/material/select';
import { MatchListComponent } from './match/match-list/match-list.component';
import { RoundDetailComponent } from './round/round-detail/round-detail.component';
import { RoundListComponent } from './round/round-list/round-list.component';
// tslint:disable-next-line: max-line-length
import { TournamentInvitationCreateComponent } from './tournament-invitation/tournament-invitation-create/tournament-invitation-create.component';
// tslint:disable-next-line: max-line-length
import { TournamentInvitationDeleteComponent } from './tournament-invitation/tournament-invitation-delete/tournament-invitation-delete.component';
// tslint:disable-next-line: max-line-length
import { TournamentInvitationDetailComponent } from './tournament-invitation/tournament-invitation-detail/tournament-invitation-detail.component';
import { TournamentInvitationEditComponent } from './tournament-invitation/tournament-invitation-edit/tournament-invitation-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PlayerListComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    PlayerDeleteComponent,
    PlayerRegisterComponent,
    PlayerEditComponent,
    PlayerSearchComponent,
    TeamListComponent,
    TeamDetailComponent,
    TeamEditComponent,
    TeamCreateComponent,
    TeamDeleteComponent,
    MatchListComponent,
    RoundDetailComponent,
    RoundListComponent,
    TournamentInvitationCreateComponent,
    TournamentInvitationDeleteComponent,
    TournamentInvitationDetailComponent,
    TournamentInvitationEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxHalClientModule.forRoot(),
    LoginBasicModule,
    ErrorHandlerModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatDividerModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService },
    AuthenticationBasicService, LoggedInGuard, PlayerGuard, PlayerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
