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

//Tournaments
import {TournamentListComponent} from './tournament/tournament-list/tournament-list.component';
import {TournamentCreateComponent} from './tournament/tournament-create/tournament-create.component';
import {TournamentEditComponent} from './tournament/tournament-edit/tournament-edit.component';
import {TournamentDeleteComponent} from './tournament/tournament-delete/tournament-delete.component';
import {TournamentDetailComponent} from './tournament/tournament-detail/tournament-detail.component';

const routes: Routes = [
  {path: 'players/register', component: PlayerRegisterComponent},
  {path: 'players/:id/edit', component: PlayerEditComponent, canActivate: [PlayerGuard]},
  {path: 'players/:id/delete', component: PlayerDeleteComponent, canActivate: [PlayerGuard]},
  {path: 'players/:id', component: PlayerDetailComponent, canActivate: [PlayerGuard]},
  {path: 'players', component: PlayerListComponent, canActivate: [LoggedInGuard]},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},

  //Tournaments
  {path: 'tournaments',component: TournamentListComponent},
  {path: 'tournaments/new',component: TournamentCreateComponent},
  {path: 'tournaments/:id/edit',component: TournamentEditComponent},
  {path: 'tournaments/:id/delete', component: TournamentDeleteComponent},
  {path: 'tournaments/:id',component: TournamentDetailComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
