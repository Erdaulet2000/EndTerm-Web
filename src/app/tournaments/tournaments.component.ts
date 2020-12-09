import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterContentChecked, OnDestroy, AfterViewChecked {

  constructor() { }


  ngOnChanges() {    		console.log("AppComponent:OnChanges");  }
  ngOnInit() {    			console.log("AppComponent:OnInit");  }
  ngDoCheck() {         	console.log("AppComponent:DoCheck");  }
  ngAfterContentInit() {    console.log("AppComponent:AfterContentInit");  }
  ngAfterContentChecked() { console.log("AppComponent:AfterContentChecked");}
  ngAfterViewInit() {       console.log("AppComponent:AfterViewInit");  }
  ngAfterViewChecked() {    console.log("AppComponent:AfterViewChecked");  }
  ngOnDestroy() {    		console.log("AppComponent:OnDestroy");  }
}
