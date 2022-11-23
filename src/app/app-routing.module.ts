import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const Routes: Route[] = [
  {
    path:'',
    component:MainComponent,
  },
  
  {
    path:'main',
    loadChildren:() => import('./main/main.module').then(m=>m.MainModule)
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
