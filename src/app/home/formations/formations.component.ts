import { Component, OnInit } from '@angular/core';
import { Training } from '../../models/training';
import { TrainingService } from '../../services/training/training.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  formations :Training[] = [];
  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
    this.formations = this.trainingService.formations;
  }

}
