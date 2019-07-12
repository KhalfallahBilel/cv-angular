import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill/skill.service';
import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-training-cv',
  templateUrl: './training-cv.component.html',
  styleUrls: ['./training-cv.component.css']
})
export class TrainingCvComponent implements OnInit {
  formations :Training[] = [];
  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
    this.formations = this.trainingService.formations;
  }

}
