import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from '../address/address.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';



@NgModule({
  declarations: [
    AddressComponent,

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
    AddressComponent,

    HeaderComponent,
    HomeComponent,
    SignInComponent
  ]
})
export class MainModule { }
