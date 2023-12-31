import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import {Subject} from 'rxjs'
import {debounceTime} from 'rxjs/operators'


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{
  
  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

  @Input()
  placeHolder:string='';

  debouncer:Subject<string> = new Subject();
  txtInput:string='';

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(value=>{
        this.onDebounce.emit(value);
    });
  }

  keyPressed(){
    this.debouncer.next(this.txtInput);
  }
  search(){
    this.onEnter.emit(this.txtInput);
  }
}
