import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newkomp',
  templateUrl: './newkomp.component.html',
  styleUrls: ['./newkomp.component.css']
})
export class NewkompComponent implements OnInit {
 
   check: number[]=[]

  constructor() { 
    // this.check=[]
   
  }

  ngOnInit(): void {
    console.log(this.check);
    
    
  }
  chekNumber(){
   
     let x = Math.random();
 
if (x % 2 === 0) {
    console.log(x +" is even number");
     
} else {
    console.log(x+" is Odd Number");
    
}

}
  }


