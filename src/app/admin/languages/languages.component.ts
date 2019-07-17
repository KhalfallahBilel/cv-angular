import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Language } from 'src/app/models/language';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  val2: number = 5;
  msg: string;

  form: FormGroup;

  languages: any[];
  displayDialog: boolean;
  language: Language;
  selectedLanguage: Language;
  newLanguage: boolean;
  cols: any[];

  payload: any;

  constructor(private languageService: LanguageService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      'languageName': new FormControl('', Validators.required),
      'value': new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.max(100)]))
    });
    this.getLanguages();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'languageName', header: 'Language Name' },
      { field: 'value', header: 'Value' }
    ];
  }

  getLanguages(): void {
    this.languageService.findAll()
      .subscribe(languages => this.languages = languages);
  }

  showDialogToAdd() {
    this.newLanguage = true;
    this.language = { id: null,languageName: '', value: null };
    this.displayDialog = true;
  }

  save(id) {
    let languages = [...this.languages];
    this.payload = this.form.value;
    if (this.newLanguage) {
      this.languages.push(this.payload);
      this.languageService.save(this.payload).subscribe(result => {
        this.router.navigateByUrl('/home');
        console.log('ok');
      }, error => {
        error.log('error');
      });
    } else {
      let id = this.selectedLanguage['id'];
      this.languageService.update(id,this.languages[this.languages.indexOf(this.selectedLanguage)] = this.language)
      .subscribe(result=>{
        this.router.navigateByUrl('/home');
        console.log('ok');
      },error=>{
        console.log(error);
      })
    };
    this.languages = this.languages;
    this.language = null;
    this.displayDialog = false;
  }

  delete(id) {
    let index = this.selectedLanguage['id'];
    this.displayDialog = false;
    this.languageService.delete(index).subscribe(result => {
      id = index;
      this.languages = this.languages.filter((elem, i) => {
        return i != id;
      });
      this.router.navigateByUrl('home');
    }, error => console.error('error'));
  }

  onRowSelect(event) {
    this.newLanguage = false;
    this.language = this.cloneLanguage(event.data);
    this.displayDialog = true;
  }

  cloneLanguage(l: Language): Language {
    let language: any = {};
    for (let prop in l) {
      language[prop] = l[prop];
    }
    return language;
  }

  handleRate(event) {
    this.msg = "You have rated " + event.value;
  }

  handleCancel(event) {
    this.msg = "Rating Cancelled";
  }
}
