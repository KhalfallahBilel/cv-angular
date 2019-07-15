import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill/skill.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
  skills: Skill[] = [];
  displayDialog: boolean;
  skill: any = {};
  selectedSkill: Skill;
  newSkill: boolean;
  cols: any[];

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skills = this.skillService.skills;
    this.cols = [
      { field: 'skill', header: 'Skill' },
      { field: 'skillName', header: 'Skill Name' },
      { field: 'value', header: 'Value' }
    ];
  }

  showDialogToAdd() {
    this.newSkill = true;
    this.skill = {};
    this.displayDialog = true;
  }

  save() {
    let skills = [...this.skill];
    if (this.newSkill) {
      skills.push(this.skill);
    } else {
      skills[this.skills.indexOf(this.selectedSkill)] = this.skill;
    }
    this.skills = skills;
    this.skill = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.skills.indexOf(this.selectedSkill);
    this.skills = this.skills.filter((val, i) => i != index);
    this.skill = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newSkill = false;
    this.skill = this.cloneSkill(event.data);
    this.displayDialog = true;
  }

  cloneSkill(s: Skill) {
    let skill = {};
    for (let prop in s) {
      skill[prop] = s[prop];
    }
    return skill;
  }

}
