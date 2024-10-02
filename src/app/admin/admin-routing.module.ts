import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { RightsComponent } from './pages/rights/rights.component';

const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,

    children: [
      { path: 'user', component: UserComponent },
      { path: 'rights', component: RightsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
