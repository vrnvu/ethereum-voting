// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { ProposalDetailComponent } from './components/proposal-detail/proposal-detail.component';

// Services, providers are shared instances
import {ProposalService} from './shared/proposal.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './shared/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ProposalComponent,
    ProposalDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProposalService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
