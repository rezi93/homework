import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistComponent } from './register/regist/regist.component';
import { SignInComponent } from './sign-in/sign-in.component';

const Routes: Route[] = [
  {
    path:'sign-in',
    component:SignInComponent,
  },
  {

    path:'register',
    component:RegistComponent,
  },
  {
    path:'main',
    loadChildren:()=> import('./main/main.module').then(m=>m.MainModule)
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
  
  
 
];

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
