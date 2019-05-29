import { Component, OnInit } from '@angular/core';
import { Condidate } from '../models/condidate';
import { CondidateService } from '../services/condidate/condidate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
condidate: Condidate;
  constructor(private condidateService:CondidateService) { }

  ngOnInit() {
    this.condidate = this.condidateService.condidate;
  }

}
