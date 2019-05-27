import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
title = 'materialApp'; 
   disabled = false;
   invert = false;
   thumbLabel = true;
   value = 0;
   vertical = false;
  constructor() { }

  ngOnInit() {
  }

}
