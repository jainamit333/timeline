import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../ConfigurationService';

@Component({
  selector: 'app-timeline-holder',
  templateUrl: './timeline-holder.component.html',
  styleUrls: ['./timeline-holder.component.css']
})
export class TimelineHolderComponent implements OnInit {

  showTimeLine = true;
  timeline ;
  timeline_2;

  constructor(private _ConfigurationService: ConfigurationService) {
    this._ConfigurationService.getLayoutData('/assets/data/antarika-timeline.json').subscribe(
      (res: Object) => {

        (<Array<any>>res).forEach((value, index, array) => {
          array[index]['date'] = new Date(value['date']);
        })
        this.timeline = res;
      }
    )
    this._ConfigurationService.getLayoutData('/assets/data/amit-timeline.json').subscribe(
      (res: Object ) => {
        (<Array<any>>res).forEach((value, index, array) => {
          array[index]['date'] = new Date(value['date']);
        })
        this.timeline_2 = res;
      }
    )
  }

  ngOnInit() {
    console.log('on init')
  }

}
