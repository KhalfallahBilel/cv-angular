import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skills = [
    {
      id: 1,
      skillName: 'HTML JavaScript SQL CSS3 J2EE PHP HTML5 TypeScript JAVA',
      skill:'Languages et WEB',
      value:80
    },
    {
      id: 2,
      skillName: 'WebServices Angular 2+ NodeJS REST Hibernate Spring',
      skill:'Farmeworks',
      value:80
    },
    {
      id: 3,
      skillName: 'NoSQL MySQL',
      skill:'BDD',
      value:65
    },
    {
      id:4,
      skillName:'Visual Studio GIT NetBeans Eclipse Maven Tomcat',
      skill:'Outils',
      value:90
    },
    {
      id:5,
      skillName:'Adobe Creative Suite',
      skill:'Multimédia',
      value:80
    }
  ];
  constructor() { }
}
