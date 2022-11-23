import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/home/home.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';
import { PagenotfoundComponent } from 'src/app/pagenotfound/pagenotfound.component';
import { MainComponent } from '../main.component';

const routes: Route[] = [
  {

    path:'',
    component: MainComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ],
  

  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
