import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GitHubComponent } from './github.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GitHubUserComponent } from './githubuser.component';
import { LoginComponent } from './login.component';

import { AuthGuard } from './auth-guard.service';
import { LoginService } from './login.service';
import { PreventUnsavedGuard } from './prevent-unsaved.service';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent, GitHubComponent, GitHubUserComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
  ],
  providers: [AuthGuard, LoginService, PreventUnsavedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
