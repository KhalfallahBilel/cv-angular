import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill/skill.service';
import { Skill } from 'src/app/models/skill';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {
  val2: number = 5;
  msg: string;

  form: FormGroup;

  skills: any[];
  displayDialog: boolean;
  skill: Skill;
  selectedSkill: Skill;
  newSkill: boolean;
  cols: any[];

  payload: any;

  constructor(private skillService: SkillService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      'skill': new FormControl('', Validators.required),
      'skillName': new FormControl('', Validators.required),
      'value': new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.max(100)]))
    });
    this.getSkills();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'skill', header: 'Skill' },
      { field: 'skillName', header: 'Skill Name' },
      { field: 'value', header: 'Value' }
    ];
  }

  getSkills(): void {
    this.skillService.findAll()
      .subscribe(skills => this.skills = skills);
  }

  showDialogToAdd() {
    this.newSkill = true;
    this.skill = { id: null, skill: '', skillName: '', value: null };
    this.displayDialog = true;
  }

  save(id) {
    let skills = [...this.skills];
    this.payload = this.form.value;
    if (this.newSkill) {
      skills.push(this.payload);
      this.skillService.save(this.payload).subscribe(result => {
        this.router.navigateByUrl('/home');
        console.log('ok');
      }, error => {
        error.log('error');
      });
    } else {
      let id = this.selectedSkill['id'];
      this.skillService.update(id,skills[this.skills.indexOf(this.selectedSkill)] = this.skill)
      .subscribe(result=>{
        this.router.navigateByUrl('/home');
        console.log('ok');
      },error=>{
        console.log(error);
      })
    };
    this.skills = skills;
    this.skill = null;
    this.displayDialog = false;
  }

  delete(id) {
    let index = this.selectedSkill['id'];
    this.displayDialog = false;
    this.skillService.delete(index).subscribe(result => {
      id = index;
      this.skills = this.skills.filter((elem, i) => {
        return i != id;
      });
      this.router.navigateByUrl('home');
    }, error => console.error('error'));
  }

  onRowSelect(event) {
    this.newSkill = false;
    this.skill = this.cloneSkill(event.data);
    this.displayDialog = true;
  }

  cloneSkill(s: Skill): Skill {
    let skill: any = {};
    for (let prop in s) {
      skill[prop] = s[prop];
    }
    return skill;
  }

  handleRate(event) {
    this.msg = "You have rated " + event.value;
  }

  handleCancel(event) {
    this.msg = "Rating Cancelled";
  }
}
