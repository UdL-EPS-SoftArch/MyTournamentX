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

//Teams
import { TeamListComponent} from './team/team-list/team-list.component';
import { TeamDetailComponent } from './team/team-detail/team-detail.component';
import { TeamCreateComponent } from './team/team-create/team-create.component';
import { TeamEditComponent } from './team/team-edit/team-edit.component';
import { TeamDeleteComponent } from './team/team-delete/team-delete.component';


const routes: Routes = [
  {path: 'players/register', component: PlayerRegisterComponent},
  {path: 'players/:id/edit', component: PlayerEditComponent, canActivate: [PlayerGuard]},
  {path: 'players/:id/delete', component: PlayerDeleteComponent, canActivate: [PlayerGuard]},
  {path: 'players/:id', component: PlayerDetailComponent, canActivate: [PlayerGuard]},
  {path: 'players', component: PlayerListComponent, canActivate: [LoggedInGuard]},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  
  //Teams
  {path: 'teams',component: TeamListComponent},
  {path: 'teams/new',component: TeamCreateComponent},
  {path: 'teams/:id/edit', component: TeamEditComponent},
  {path: 'teams/:id/delete',component: TeamDeleteComponent},
  {path: 'teams/:id',component: TeamDetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
