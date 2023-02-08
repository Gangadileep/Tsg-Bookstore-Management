import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { UserComponent } from './user/user.component';
import { UserviewComponent } from './userview/userview.component';


const routes: Routes = [
  // Fallback when no prior route is matched
  { path: 'login', component:LoginComponent, pathMatch: 'full'},
  {path:'user',component:UserComponent,pathMatch:'full'},
  {path:'userview',component:UserviewComponent,pathMatch:'full'}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
