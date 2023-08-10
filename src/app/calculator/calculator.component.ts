import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit, DoCheck {
  keyclick: string = '';
  display: string = '';
  firstValue: number = 0;
  operation: string | null = null;
  keys = [
    { name: 'zero', value: '0' },
    { name: 'one', value: '1' },
    { name: 'two', value: '2' },
    { name: 'three', value: '3' },
    { name: 'four', value: '4' },
    { name: 'five', value: '5' },
    { name: 'six', value: '6' },
    { name: 'seven', value: '7' },
    { name: 'eight', value: '8' },
    { name: 'nine', value: '9' },
    { name: 'dot', value: '.' },
    { name: 'ac', value: 'AC' },
    { name: 'add', value: '+' },
    { name: 'sott', value: '-' },
    { name: 'molt', value: 'X' },
    { name: 'divi', value: '/' },
    { name: 'ug', value: '=' },
  ];
  constructor() {}

  onKeyClick(value: string) {
    this.keyclick = value;
  }

  addToDisplay(value: string) {
    if (this.display === '0') {
      this.display = '';
    } else if (this.display === '') {
      this.display = '0';
    }

    this.display = `${this.display}${value}`;
  }
  nextStep(operation: string) {
    // if (this.firstValue != 0) {
    //   this.calculate();
    // } else {
    this.firstValue = parseFloat(this.display);
    this.operation = operation;
    this.display = '0';
    // }
  }

  calculate() {
    const a = this.firstValue;
    const b = parseFloat(this.display);
    let result: number;
    switch (this.operation) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        result = 0;
    }
    this.firstValue = result;
    this.display = result.toString();
  }

  ngOnInit(): void {
    this.display = '';
  }

  ngDoCheck() {
    switch (this.keyclick) {
      case '+':
        this.nextStep('+');
        break;
      case '-':
        this.nextStep('-');
        break;
      case 'X':
        this.nextStep('*');
        break;
      case '/':
        this.nextStep('/');
        break;
      case '=':
        this.calculate();
        break;
      case 'AC':
        this.display = '0';
        this.firstValue = 0;
        break;
      default:
        this.addToDisplay(this.keyclick);
    }
  }
}
