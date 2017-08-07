import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit , OnChanges {

  constructor() { }

  ngOnInit() {
    console.log('on ng init');
  }

  ngOnChanges() {
    console.log('on nh change');
  }




}
