import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './history/history.component';
import { LayoutComponent } from './layout/layout.component';
import { NewsComponent } from './news/news.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TeamsComponent } from './teams/teams.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { AgePipe } from './pipes/age.pipe';
import { LoginComponent } from './login/login.component';
import {UsersService} from './services/users.service';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import {AuthGuard} from './auth.guard';
import { AddPlayerComponent } from './add-player/add-player.component';
import {UnSavedChangesGuard} from './guard/un-saved-changes.guard';
import {ResolveGuard} from './guard/resolve.guard';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: LayoutComponent},
  {path: 'player/:id', component: PlayerComponent},
  {path: 'news', component: NewsComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'tournaments', component: TournamentsComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'players',
    component: PlayersComponent,
    resolve: {
    data: ResolveGuard,
    },
    canActivate: [AuthGuard],
  },
  {path: 'addPlayer', component: AddPlayerComponent, canDeactivate: [UnSavedChangesGuard]},
  {path: 'login', component: LoginComponent},
  { path: 'template-form', component: TemplateDrivenFormComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HistoryComponent,
    LayoutComponent,
    NewsComponent,
    ReviewsComponent,
    TournamentsComponent,
    AgePipe,
    LoginComponent,
    PlayersComponent,
    PlayerComponent,
    AddPlayerComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective,
    TemplateDrivenFormComponent,
    TeamsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [UsersService, AuthGuard, UnSavedChangesGuard, ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
