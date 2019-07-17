import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';

@Component({
  selector: 'app-training-cv',
  templateUrl: './training-cv.component.html',
  styleUrls: ['./training-cv.component.css']
})
export class TrainingCvComponent implements OnInit {
  formations :Training[];
  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
    this.getTraining();
  }
  getTraining(): void {
    this.trainingService.findAll()
      .subscribe(training => this.formations = training);
  }
}
