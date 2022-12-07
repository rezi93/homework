import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, RouterModule, Routes } from '@angular/router';


import { MainComponent } from '../main.component';

const routes: Route[] = [
  {
path:'',
component:MainComponent
  }
]


  

    
      
      
      
    
    
  
  
  
  

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
