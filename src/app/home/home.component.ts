import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() maxnum:number=0
  @Output() StarRate: EventEmitter<number>=new EventEmitter<number>()

  starMaxNum!:number[]
  rateNum!:number
  

  constructor() {
  }

  ngOnInit(): void {
    this.starMaxNum=[]
    for(let i=0;i<this.maxnum;i++){
      this.starMaxNum.push(i+1)
    }
  }
  getRateNum(num:number){
    if(this.rateNum===num){
      this.rateNum=0
    }else{
      this.rateNum=num
    }
    this.StarRate.emit(this.rateNum)
  }

 

}

 
  



