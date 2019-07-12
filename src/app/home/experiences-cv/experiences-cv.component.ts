import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience/experience.service';

@Component({
  selector: 'app-experiences-cv',
  templateUrl: './experiences-cv.component.html',
  styleUrls: ['./experiences-cv.component.css']
})
export class ExperiencesCvComponent implements OnInit {
  experiences :Experience[] = [];
  constructor(private experienceService:ExperienceService) { }

  ngOnInit() {
    this.experiences = this.experienceService.experiences;
  }

}
