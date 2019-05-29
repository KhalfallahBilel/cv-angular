import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  formations = [
    {
      id: 1,
      date: '2018',
      schoolName: 'SOFTEAM Group',
      diplome: "Formation Java JEE / ANGULAR",
      description: "Formation de 3 mois de en Programmation Orienté Objet, Java , JEE, HyberNate, SpringBoot, de coté serveur et HTML5, CSS3, JavaScript, SQL, TypeScript avec ANGULAR4, avec les Bibliothèques et les dépendances comme RGXBootstrap de coté client. Méthode Agile Scrum, UML. Création d’une applicaton web de réservation et vente de billet d’avion avec les technologies cités dessus.."
    },
    {
      id: 2,
      date: '2011/2012',
      schoolName: 'aaa',
      diplome: "nnnnn",
      description: "gjf"
    },
    {
      id: 3,
      date: '2011/2012',
      schoolName: 'aaa',
      diplome: "nnnnn",
      description: "gjf"
    }
  ];
  constructor() { }
}
