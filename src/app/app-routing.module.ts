import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProposalComponent} from './components/proposal/proposal.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProposalDetailComponent} from './components/proposal-detail/proposal-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'proposals', component: ProposalComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: ProposalDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

