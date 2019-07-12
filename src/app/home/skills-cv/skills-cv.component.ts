import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-skills-cv',
  templateUrl: './skills-cv.component.html',
  styleUrls: ['./skills-cv.component.css']
})
export class SkillsCvComponent implements OnInit {
  skills :Skill[] = [];
  constructor(private skillService:SkillService) { }

  ngOnInit() {
    this.skills = this.skillService.skills;
  }
}
