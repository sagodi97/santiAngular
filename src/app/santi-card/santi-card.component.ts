import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-santi-card',
  templateUrl: './santi-card.component.html',
  styleUrls: ['./santi-card.component.css']
})
export class SantiCardComponent implements OnInit {

  @Input('data') data: any;
  constructor() { }

  ngOnInit() {
  }

}
