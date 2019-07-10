import { Component, OnInit } from '@angular/core';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language/language.service';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.component.html',
  styleUrls: ['./langues.component.css']
})
export class LanguesComponent implements OnInit {
  languages :Language[] = [];
  constructor(private languageService:LanguageService) { }

  ngOnInit() {
    this.languages = this.languageService.languages;
  }
}
