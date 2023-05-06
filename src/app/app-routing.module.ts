import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UsersComponent } from './component/users/users.component';
import { TicketsComponent } from './component/tickets/tickets.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { HomeComponent } from './component/home/home.component';
import { AddFollowUpComponent } from './component/add-follow-up/add-follow-up.component';

const routes: Routes = [
  {path :'' , redirectTo:'/login' , pathMatch : 'full' },
  {path: 'login' , component : LoginComponent},
  {path : 'adduser' , component : AddUserComponent},
  {path: 'dashboard' , component:DashboardComponent,
  // {path: 'users' , component : UsersComponent},
  // {path: 'tickets',component : TicketsComponent,
  children:[
    { path:'users', component : UsersComponent},
  {path: 'tickets',component : TicketsComponent},
  {path: 'home' , component : HomeComponent},
  {path:'followUp', component:AddFollowUpComponent}

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
