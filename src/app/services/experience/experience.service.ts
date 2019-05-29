import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
   experiences = [
    {
      id: 0,
      date: '2018-2019',
      companyName: 'SCHNEIDER ELECTRIC - Carros',
      poste:"Développeur FrontEnd Angular",
      description:"Manœuvre en bâtiment de construction des piscines. Technicien de revêtement des piscines avec des produits composites (Résine)",
      technos:"ANGULAR 7 NODE JS SASS MICROSOFT AZURE GIT KARMA / JASMINE POSTMAN MULTI FACTOR AUTHENTICATION / JWT"
    },
    {
      id: 1,
      date: '2015-2018',
      companyName: 'PA Concept– Mougins',
      poste:"Technicien de revêtement Piscines",
      description:"Manœuvre en bâtiment de construction des piscines. Technicien de revêtement des piscines avec des produits composites (Résine)",
      technos:" "
    },
    {
      id: 2,
      date: '2013-2015',
      companyName: 'CUISTO– Tunisie',
      poste:"WebMaster",
      description:"gjf",
      technos:"cqscqs"
    },
    {
      id: 3,
      date: '2011/2012',
      companyName: 'aaa',
      poste:"nnnnn",
      description:"gjf",
      technos:"cqscqs"
    }
  ];
  constructor() { }
}
