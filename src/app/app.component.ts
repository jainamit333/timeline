import { Component } from '@angular/core';
import { ConfigurationService } from './ConfigurationService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  layout = {};
  constructor(private _ConfigurationService: ConfigurationService) {}
}

