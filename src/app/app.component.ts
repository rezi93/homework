import { Component, OnInit } from '@angular/core';
import { IpersonData } from './personData.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'homework'
  person:IpersonData;
  constructor(){
    this.person={
      name: "Dennis Schulist",
    isStudent: false,
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: 23505_1337
    }

    }
  }

  
  ngOnInit(): void{

  }

}
