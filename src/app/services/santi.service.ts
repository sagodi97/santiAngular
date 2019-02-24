import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { santaData } from 'src/data/santaData';


@Injectable({
  providedIn: 'root'
})
export class SantiService {

  constructor(private http:HttpClient) { }

  getSubjects(){
    return this.http.get(santaData.url)
  }
}
