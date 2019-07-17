import { Component, OnInit } from '@angular/core';
import { Candidate } from '../models/candidate';
import { CandidateService } from '../services/condidate/candidate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  candidates: Candidate[];
  candidate: Candidate;
  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.getCandidates();
    this.getCandidate();
  }

  getCandidates() {
    this.candidateService.findAll().subscribe(candidates => this.candidates = candidates);
  }
  getCandidate() {
    this.candidateService.findOne(1).subscribe(candidate => this.candidate = candidate);
  }

}
