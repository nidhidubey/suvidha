import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    SidebarModule,
    RouterModule.forChild([
      {
        path: '', component:MainComponent ,
        // children: [
        //   { path: 'dashboard', component: MainComponent  },]
        }
      ])
  ],
  declarations: [
    MainComponent,
  ]
})
export class MainModule { }
