import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  @ViewChild('input') inputElement !: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  
  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    fromEvent(this.inputElement.nativeElement, "keyup")
    .pipe(
      debounceTime(500),
      pluck('target', 'value'),
      distinctUntilChanged<string>(),
      filter((value:string)=>value.length > 3),
      map((value)=>value)
    ).subscribe(value=>{
      this.search.emit(value)
    });
  }

}
