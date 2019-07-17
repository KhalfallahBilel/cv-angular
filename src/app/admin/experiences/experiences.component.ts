import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  form: FormGroup;

  experiences: any[];
  displayDialog: boolean;
  experience: Experience;
  selectedExperience: Experience;
  newExperience: boolean;
  cols: any[];

  payload: any;
  constructor(private fb: FormBuilder, private router: Router,private experienceService:ExperienceService) { }

  ngOnInit() {
    this.form = this.fb.group({
      'date': new FormControl('', Validators.required),
      'companyName': new FormControl('', Validators.required),
      'poste': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'technos': new FormControl('', Validators.required)
      });
    this.getExperiences();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'date', header: 'Date' },
      { field: 'companyName', header: 'Company Name' },
      { field: 'role', header: 'Role' },
      { field: 'description', header: 'Description' },
      { field: 'technos', header: 'Technologies' }
    ];
  }
  getExperiences(): void {
    this.experienceService.findAll()
      .subscribe(experiences => {this.experiences = experiences;
        console.log(this.experiences);});
  }

  showDialogToAdd() {
    this.newExperience = true;
    this.experience = { id: null, date: '', companyName: '', poste: '',description:'',technos:'' };
    this.displayDialog = true;
  }

  save(id) {
    let experiences = [...this.experiences];
    console.log(experiences);
    this.payload = this.form.value;
    if (this.newExperience) {
      experiences.push(this.payload);
      this.experienceService.save(this.payload).subscribe(result => {
        this.router.navigateByUrl('/home');
        console.log('ok');
      }, error => {
        error.log('error');
      });
    } else {
      let id = this.selectedExperience['id'];
      console.log(id);
      this.experienceService.update(id,experiences[this.experiences.indexOf(this.selectedExperience)] = this.experience)
      .subscribe(result=>{
        this.router.navigateByUrl('/home');
        console.log('ok');
      },error=>{
        console.log(error);
      })
    };
    this.experiences = experiences;
    this.experience = null;
    this.displayDialog = false;
  }

  delete(id) {
    let index = this.selectedExperience['id'];
    console.log(index);
    
    this.displayDialog = false;
    this.experienceService.delete(index).subscribe(result => {
      id = index;
      this.experiences = this.experiences.filter((elem, i) => {
        return i != id;
      });
      this.router.navigateByUrl('home');
    }, error => console.error('error'));
  }

  onRowSelect(event) {
    this.newExperience = false;
    this.experience = this.cloneExperience(event.data);
    this.displayDialog = true;
  }

  cloneExperience(e: Experience): Experience {
    let experience: any = {};
    for (let prop in e) {
      experience[prop] = e[prop];
    }
    return experience;
  }

}
