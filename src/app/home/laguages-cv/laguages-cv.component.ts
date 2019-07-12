import { Component, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-laguages-cv',
  templateUrl: './laguages-cv.component.html',
  styleUrls: ['./laguages-cv.component.css']
})
export class LaguagesCvComponent implements OnInit {
  languages :Language[] = [];
  constructor(private languageService:LanguageService) { }

  ngOnInit() {
    this.languages = this.languageService.languages;
  }
}
