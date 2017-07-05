import { Component } from '@angular/core';
import { ConfigurationService } from './ConfigurationService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  layout;
  constructor(private _ConfigurationService: ConfigurationService){
    this._ConfigurationService.getConfiguration().subscribe(
      (res) => {
        this.layout = res;
        console.log('after reading layout from json');
        console.log(this.layout);
      })
  }
}

