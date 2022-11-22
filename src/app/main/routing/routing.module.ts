import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"Home",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RoutingModule { }
