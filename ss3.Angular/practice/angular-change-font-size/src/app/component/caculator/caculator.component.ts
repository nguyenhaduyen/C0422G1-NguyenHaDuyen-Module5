import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  number1: number;
  number2: number;
  operand: string;

  calculator (number1: number,number2:number,operand:String) : string {
    switch (operand) {
      case "+" :
         return  number1 + number2 +"";
      break;
      case "-" :
        return number1 - number2 + "";
      break;
      case "*" :
        return number1*number2 + "";
      break;
      case "/" :
        if (number2==0) {
          return "number2 phai khac 0"
        } else {
          return number1/number2 + "";
        }
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
