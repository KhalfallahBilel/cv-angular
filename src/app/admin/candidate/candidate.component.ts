import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/services/condidate/candidate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {
  form: FormGroup;

  candidates: any[];
  displayDialog: boolean;
  candidate: Candidate;
  selectedCandidate: Candidate;
  newCandidate: boolean;
  cols: any[];

  payload: any;

  uploadedFiles: any[] = [];
  constructor(private candidateService: CandidateService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'spec': new FormControl('', Validators.required),
      'mob': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'email': new FormControl('', Validators.required),
      'link': new FormControl('', Validators.required),
      'about': new FormControl('', Validators.required),
      'picture': new FormControl(''),
    });
    this.getCandidates();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'spec', header: 'Speciality' },
      { field: 'mob', header: 'Mobile' },
      { field: 'address', header: 'Address' },
      { field: 'email', header: 'E-mail' },
      { field: 'link', header: 'Link' },
      { field: 'about', header: 'About' },
      { field: 'picture', header: 'Picture' },
    ];
  }


  getCandidates() {
    this.candidateService.findAll().subscribe(candidates => this.candidates = candidates)
  }

  showDialogToAdd() {
    this.newCandidate = true;
    this.candidate = { id: null, firstName: '', lastName: '', spec: '', mob: '', address: '', email: '', link: '', about: '', picture: File };
    this.displayDialog = true;
  }

  save() {
    let id = this.selectedCandidate['id'];
    console.log(this.form.value);
    const formData: FormData = new FormData();
    formData.set('form',this.form.value);
    console.log(formData);
    
    // let data: { files: File };
    // const file = data.files[0];
    // console.log(file);
    // this.form.get('picture').setValue(file);
    // console.log(this.form.value);
    console.log(this.form.value);
    
    console.log(this.form.value);
    this.candidateService.update(id, this.candidates[this.candidates.indexOf(this.selectedCandidate)] = this.candidate)
      .subscribe(result => {
        this.router.navigateByUrl('/home');
        console.log('ok');
      }, error => {
        console.log(error);
      });
    this.candidates = this.candidates;
    this.candidate = null;
    this.displayDialog = false;
  }

  delete(id) {
    let index = this.selectedCandidate['id'];
    this.displayDialog = false;
    this.candidateService.delete(index).subscribe(result => {
      id = index;
      this.candidates = this.candidates.filter((elem, i) => {
        return i != id;
      });
      this.router.navigateByUrl('home');
    }, error => console.error('error'));
  }


  onRowSelect(event) {
    this.newCandidate = false;
    this.candidate = this.cloneCandidate(event.data);
    this.displayDialog = true;
  }

  cloneCandidate(c: Candidate): Candidate {
    let candidate: any = {};
    for (let prop in c) {
      candidate[prop] = c[prop];
    }
    return candidate;
  }
  onFileUpload(data: { files: File }): void {
    const formData: FormData = new FormData();
    const file = data.files[0];
    console.log(file);
    this.form.get('picture').setValue(file);
    console.log(this.form.value);
    
    formData.set('profile', this.form.value);
    console.log(formData);

  }

}
