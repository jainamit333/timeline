import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../ConfigurationService';

@Component({
  selector: 'app-events-holder',
  templateUrl: './events-holder.component.html',
  styleUrls: ['./events-holder.component.scss']
})
export class EventsHolderComponent implements OnInit {
  mainEvent;
  constructor(private _ConfigurationService: ConfigurationService) {
    this._ConfigurationService.getLayoutData('/assets/data/main-event.json').subscribe(
      (res: Object) => {
        this.mainEvent = res;
      }
    )
  }
  ngOnInit() {
  }
}
