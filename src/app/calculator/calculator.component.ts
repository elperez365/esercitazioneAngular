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

  onKeyClick(event: Event) {
    const value: string = (<HTMLButtonElement>event.target).textContent!;

    this.keyclick = value;
  }
  ngOnInit(): void {
    this.display = '0';
  }
  ngDoCheck() {}
}
