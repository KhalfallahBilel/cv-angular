import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages = [
    {
      id: 1,
      languageName: 'français',
      value:90
    },
    {
      id: 2,
      languageName: 'arabe',
      value:100
    },
    {
      id: 3,
      languageName: 'anglais',
      value:55
    }
  ];
  constructor() { }
}
