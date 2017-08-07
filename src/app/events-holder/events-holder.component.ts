import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-holder',
  templateUrl: './events-holder.component.html',
  styleUrls: ['./events-holder.component.scss']
})
export class EventsHolderComponent implements OnInit {

  slides = [
    {img: 'http://placehold.it/350x150/000000"'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];
  slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};

  addSlide() {
    this.slides.push({img: 'http://placehold.it/350x150/777777'})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }
  constructor() { }
  ngOnInit() {
  }
}
