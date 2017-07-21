import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../ConfigurationService';

@Component({
  selector: 'app-gallery-holder',
  templateUrl: './gallery-holder.component.html',
  styleUrls: ['./gallery-holder.component.css']
})
export class GalleryHolderComponent implements OnInit {

  gallery;
  constructor(private _ConfigurationService: ConfigurationService) { }
  ngOnInit() {
    this._ConfigurationService.getLayoutData('/assets/data/gallery.json').subscribe(
      (res) => {
        this.gallery = res;
      }
    )
  }

}
