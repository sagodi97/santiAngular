import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { SantiService } from '../services/santi.service';



@Component({
  selector: 'app-santia-listing',
  templateUrl: './santia-listing.component.html',
  styleUrls: ['./santia-listing.component.css']
})
export class SantiaListingComponent implements OnInit {

  subjects:Object;
  error: string;

  constructor(private  http:HttpClient, private santiService:SantiService) { }

  ngOnInit() {
    this.santiService.getSubjects()
    .subscribe(
      data => this.subjects = data, 
      error => this.error = error.statusText
    );
    
    
  };  

}
