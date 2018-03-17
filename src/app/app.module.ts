// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';
// Components
import { AppComponent } from './app.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { ProposalDetailComponent } from './components/proposal-detail/proposal-detail.component';
import { AboutComponent } from './components/about/about.component';

// Services, providers are shared instances
import {ProposalService} from './shared/proposal.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './shared/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProposalSearchComponent } from './components/proposal-search/proposal-search.component';
import { ProtocolComponent } from './components/protocol/protocol.component';
import { ProposalFormComponent } from './components/proposal-form/proposal-form.component';
import { RecentUpdatesComponent } from './components/recent-updates/recent-updates.component';

// Primeng

@NgModule({
  declarations: [
    AppComponent,
    ProposalComponent,
    ProposalDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ProposalSearchComponent,
    AboutComponent,
    ProtocolComponent,
    ProposalFormComponent,
    RecentUpdatesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ProposalService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
