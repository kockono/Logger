import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio:number; 
  day: number; 
  month: number;

  constructor() {
    this.anio = new Date().getFullYear();
    this.day = new Date().getDay();
    this.month = new Date().getMonth();
   }

  ngOnInit() {
  }

}
