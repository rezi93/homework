import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() maxnum:number=0
  @Output() StarRate: EventEmitter<number>=new EventEmitter<number>()

  starMaxNum!:number[]
  rateNum!:number
  date:Date=new Date()
  private _router: any;
  surveyform:FormGroup;
  constructor(private_router:Router) {
    this.surveyform=new FormGroup({
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.minLength(5)),
      email:new FormControl(null,Validators.email),
      selectMenu:new FormControl(null,Validators.required),
      comments:new FormControl(null)
    })
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

  onSubmit(){
    if(this.surveyform.valid){
      alert(JSON.stringify(this.surveyform.value));
      
      
      
    }else{
      console.log("form not valid");
      
    }
    
    

  }
}
