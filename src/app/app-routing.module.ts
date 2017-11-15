import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ZeroesComponent} from './zeroes/zeroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ZeroDetailComponent} from './zero-detail/zero-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'zeroes', component: ZeroesComponent},
  {path: 'home', component: DashboardComponent},
  {path: 'detail/:id', component: ZeroDetailComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule {}
