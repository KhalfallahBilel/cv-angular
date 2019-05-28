import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience/experience.service';
import { Experience } from '../models/experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
experiences :Experience[] = [];
  constructor(private experienceService:ExperienceService) { }

  ngOnInit() {
    this.experiences = this.experienceService.experiences;
  }

}
