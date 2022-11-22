import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Iaddress } from './personData.interface';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit,OnChanges {
  @Input()studentAddress:Iaddress;
  
  @Output() changeCity:EventEmitter<boolean>=new EventEmitter(false);
  newValue:string='';
  
  constructor() { 
    this.studentAddress={
      street: '',
      suite: '',
      city: '',
      zipcode:8585
    }

}

  

  ngOnInit(): void {
  console.log(this.changevalue);
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  changevalue(){
    console.log(this.newValue);
    
    this.studentAddress.city=this.newValue
    this.changeCity.emit(true)
  }

 

  }

