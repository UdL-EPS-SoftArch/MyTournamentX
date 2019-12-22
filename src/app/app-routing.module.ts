import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { PlayerGuard } from './login-basic/player.guard';
import { AboutComponent } from './about/about.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerRegisterComponent } from './player/player-register/player-register.component';
import { RoundListComponent } from './round/round-list/round-list.component';
import { RoundDetailComponent } from './round/round-detail/round-detail.component';

// Teams
import { TeamListComponent} from './team/team-list/team-list.component';
import { TeamDetailComponent } from './team/team-detail/team-detail.component';
import { TeamCreateComponent } from './team/team-create/team-create.component';
import { TeamEditComponent } from './team/team-edit/team-edit.component';
import { TeamDeleteComponent } from './team/team-delete/team-delete.component';
// tslint:disable-next-line: max-line-length
import { TournamentInvitationCreateComponent } from './tournament-invitation/tournament-invitation-create/tournament-invitation-create.component';
// tslint:disable-next-line: max-line-length
import { TournamentInvitationDeleteComponent } from './tournament-invitation/tournament-invitation-delete/tournament-invitation-delete.component';
// tslint:disable-next-line: max-line-length
import { TournamentInvitationDetailComponent } from './tournament-invitation/tournament-invitation-detail/tournament-invitation-detail.component';
import { TournamentInvitationEditComponent } from './tournament-invitation/tournament-invitation-edit/tournament-invitation-edit.component';


const routes: Routes = [
  {path: 'tournaments/:id/rounds/', component: RoundListComponent},
  {path: 'rounds/:id', component: RoundDetailComponent},
  {path: 'players/register', component: PlayerRegisterComponent},
  {path: 'players/:id/edit', component: PlayerEditComponent, canActivate: [PlayerGuard]},
  {path: 'players/:id/delete', component: PlayerDeleteComponent, canActivate: [PlayerGuard]},
  {path: 'players/:id', component: PlayerDetailComponent, canActivate: [PlayerGuard]},
  {path: 'players', component: PlayerListComponent, canActivate: [LoggedInGuard]},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  // Team
  {path: 'teams', component: TeamListComponent},
  {path: 'teams/new', component: TeamCreateComponent},
  {path: 'teams/:id/edit', component: TeamEditComponent},
  {path: 'teams/:id/delete', component: TeamDeleteComponent},
  {path: 'teams/:id', component: TeamDetailComponent},
  // TournamentInvitation
  {path: 'tournaments/:id/invite', component: TournamentInvitationCreateComponent},
  {path: 'tournamentInvitations/:id/delete', component: TournamentInvitationDeleteComponent},
  {path: 'tournamentInvitations/:id', component: TournamentInvitationDetailComponent},
  {path: 'tournamentInvitations/:id/edit', component: TournamentInvitationEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
