import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private _router: any;
  surveyform:FormGroup;
  constructor(private_router:Router) {
    this.surveyform=new FormGroup({
      firstName:new FormControl(null),
      lastName:new FormControl(null),
      email:new FormControl(null),
      selectMenu:new FormControl(null),
      comments:new FormControl(null)
    })
   }
   
  ngOnInit(): void {
    
  }
  onSubmit(){
    if(this.surveyform.valid){
      console.log('form submited',this.surveyform);
      this.surveyform.reset();
      
      
    }else{
      console.log("form not valid");
      
    }
  }

}
