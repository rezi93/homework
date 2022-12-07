import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import { MainModule } from './main/main.module';
import { RegistComponent } from './register/regist/regist.component';
import { RoutingModule } from './main/routing/routing.module';



@NgModule({
  declarations: [
    AppComponent,
    
    MainComponent,
    PagenotfoundComponent,
    RegistComponent
  
   
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    MainModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
