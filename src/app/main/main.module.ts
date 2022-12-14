import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from '../sign-in/sign-in.component';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    
    
    HeaderComponent,
    HomeComponent,
    SignInComponent
  ],
 
  imports: [
    CommonModule,
    FormsModule,
    RoutingModule
    
  ],
  exports:[
   
    
    HeaderComponent,
    HomeComponent,
    SignInComponent,
    ReactiveFormsModule
  ]
})
export class MainModule { }
