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

import { TournamentDetailComponent } from './tournament/tournament-detail/tournament-detail.component';


const routes: Routes = [
  {path: 'tournaments/:id', component: TournamentDetailComponent},
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
  // Tournaments
  {path: 'tournaments', component: TournamentListComponent},
  {path: 'tournaments/new', component: TournamentCreateComponent},
  {path: 'tournaments/:id/edit', component: TournamentEditComponent},
  {path: 'tournaments/:id/delete', component: TournamentDeleteComponent},
  {path: 'tournaments/:id', component: TournamentDetailComponent},
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
