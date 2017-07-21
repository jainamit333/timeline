import { Component, OnInit , Input} from '@angular/core';
import { ConfigurationService } from '../ConfigurationService';

@Component({
  selector: 'app-porfolio-card',
  templateUrl: './porfolio-card.component.html',
  styleUrls: ['./porfolio-card.component.css']
})
export class PorfolioCardComponent implements OnInit {

  @Input() dataPath: string;
  data;
  constructor(private _ConfigurationService: ConfigurationService) { }

  ngOnInit() {
    this._ConfigurationService.getLayoutData(this.dataPath).subscribe(
      (res) => {
        this.data = res;
      }
    )
  }

}
