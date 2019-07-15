import { Injectable } from '@angular/core';
import { CrudService } from '../crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillService extends CrudService<any, number>{
  skills = [
    {
      id: 1,
      skill: 'HTML JavaScript SQL CSS3 J2EE PHP HTML5 TypeScript JAVA',
      skillName:'Languages et WEB',
      value:80
    },
    {
      id: 2,
      skill: 'WebServices Angular 2+ NodeJS REST Hibernate Spring',
      skillName:'Farmeworks',
      value:80
    },
    {
      id: 3,
      skill: 'NoSQL MySQL',
      skillName:'BDD',
      value:65
    },
    {
      id:4,
      skill:'Visual Studio GIT NetBeans Eclipse Maven Tomcat',
      skillName:'Outils',
      value:90
    },
    {
      id:5,
      skill:'Adobe Creative Suite',
      skillName:'Multimédia',
      value:80
    }
  ];
  constructor(protected _http: HttpClient) {
    super(_http,'url');
  }
}
