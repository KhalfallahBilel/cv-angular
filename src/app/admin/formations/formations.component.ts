import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  form: FormGroup;

  trainings: any[];
  displayDialog: boolean;
  training: Training;
  selectedTraining: Training;
  newTraining: boolean;
  cols: any[];

  payload: any;
  constructor(private fb: FormBuilder, private router: Router,private trainingService:TrainingService) { }
  ngOnInit() {
    this.form = this.fb.group({
      'date': new FormControl('', Validators.required),
      'schoolName': new FormControl('', Validators.required),
      'diplome': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required)
      });
    this.getTrainings();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'date', header: 'Date' },
      { field: 'schoolName', header: 'School Name' },
      { field: 'diplome', header: 'diploma' },
      { field: 'description', header: 'Description' }
    ];
  }

  getTrainings(): void {
    this.trainingService.findAll()
      .subscribe(trainings => {this.trainings = trainings;
        console.log(this.trainings);});
  }

  showDialogToAdd() {
    this.newTraining = true;
    this.training = { id: null, date: '', schoolName: '', diplome: '',description:'' };
    this.displayDialog = true;
  }

  save(id) {
    let trainings = [...this.trainings];
    console.log(trainings);
    this.payload = this.form.value;
    if (this.newTraining) {
      trainings.push(this.payload);
      this.trainingService.save(this.payload).subscribe(result => {
        this.router.navigateByUrl('/home');
        console.log('ok');
      }, error => {
        error.log('error');
      });
    } else {
      let id = this.selectedTraining['id'];
      console.log(id);
      this.trainingService.update(id,trainings[this.trainings.indexOf(this.selectedTraining)] = this.training)
      .subscribe(result=>{
        this.router.navigateByUrl('/home');
        console.log('ok');
      },error=>{
        console.log(error);
      })
    };
    this.trainings = trainings;
    this.training = null;
    this.displayDialog = false;
  }

  delete(id) {
    let index = this.selectedTraining['id'];
    console.log(index);
    
    this.displayDialog = false;
    this.trainingService.delete(index).subscribe(result => {
      id = index;
      this.trainings = this.trainings.filter((elem, i) => {
        return i != id;
      });
      this.router.navigateByUrl('home');
    }, error => console.error('error'));
  }

  onRowSelect(event) {
    this.newTraining = false;
    this.training = this.cloneTraining(event.data);
    this.displayDialog = true;
  }

  cloneTraining(t: Training): Training {
    let training: any = {};
    for (let prop in t) {
      training[prop] = t[prop];
    }
    return training;
  }

}
