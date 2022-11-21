import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  num:number[]=[1,2,3,4,5,6,75,22]
  constructor() { }

  ngOnInit(): void {
  }
  getResult(num:number):boolean{
    if(num%2===0){
      return true
    }else{
      return false
    }
  }


}
