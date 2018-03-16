import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProposalComponent} from './components/proposal/proposal.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProposalDetailComponent} from './components/proposal-detail/proposal-detail.component';
import {AboutComponent} from './components/about/about.component';
import {ProtocolComponent} from './components/protocol/protocol.component';
import {ProposalFormComponent} from './components/proposal-form/proposal-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'proposals', component: ProposalComponent},
  { path: 'protocol', component: ProtocolComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: ProposalDetailComponent},
  { path: 'detail/:id/vote', component: ProposalFormComponent},
  { path: 'about', component: AboutComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

