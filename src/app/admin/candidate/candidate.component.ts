import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  form: FormGroup;

  candidates: any[];
  displayDialog: boolean;
  candidate: Candidate;
  selectedCandidate: Candidate;
  newSkill: boolean;
  cols: any[];

  payload: any;
  constructor() { }

  ngOnInit() {
  }

}
