import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../crud.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService extends CrudService<any,number>{
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
  constructor(protected _http: HttpClient) {
    super(_http,'url');
  }
}
