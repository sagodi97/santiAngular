import { Component, OnInit } from '@angular/core';
import {santaData} from '../../data/santaData';

@Component({
  selector: 'app-santia-listing',
  templateUrl: './santia-listing.component.html',
  styleUrls: ['./santia-listing.component.css']
})
export class SantiaListingComponent implements OnInit {

  santaData: Array<any> = santaData;
  constructor() { }

  ngOnInit() {
  }

}
