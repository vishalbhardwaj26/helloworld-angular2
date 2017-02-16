import { Component } from '@angular/core';

@Component({
    selector: 'calc',
    templateUrl: './app/calc.component.html'
})
export class CalcComponent {

    title : string = "Hello Calc";
    num1: number;
    num2: number;
    res: number;

    add(){

        this.res = this.num1 + this.num2;
    }

 }
