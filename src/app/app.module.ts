import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RosterComponent } from './components/roster/roster.component';
import { ClanMemberComponent } from './components/clan-member/clan-member.component';
import { ClanMembersService } from './services/clan-members.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    ClanMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClanMembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
