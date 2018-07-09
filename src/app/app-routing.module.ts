import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'login',pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'main', loadChildren: './modules/main/main.module#MainModule'}
    ]),
  ],    
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
