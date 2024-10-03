import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from './services/github.service';
import { AuthenticationService } from './services/authentication.service';
import { BaseHttpService } from './services/base-http.service';
import { GuardService } from './services/guard.service';
import { DocService } from './services/doc.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    GithubService,
    AuthenticationService,
    BaseHttpService,
    GuardService,
    DocService,
  ],
})
export class CoreModule {}
