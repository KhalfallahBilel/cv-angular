import { Component, OnInit } from '@angular/core';
import { SkillService } from '../services/skill/skill.service';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
  skills :Skill[] = [];
  constructor(private skillService:SkillService) { }

  ngOnInit() {
    this.skills = this.skillService.skills;
  }

}
