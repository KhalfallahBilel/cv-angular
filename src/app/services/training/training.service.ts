import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  formations = [
    {
      id: 1,
      date: '2018',
      schoolName: 'SOFTEAM Institute',
      diplome: "Formation Java JEE / ANGULAR",
      description: "Formation de 3 mois de en Programmation Orienté Objet, Java , JEE, HyberNate, SpringBoot, de coté serveur et HTML5, CSS3, JavaScript, SQL, TypeScript avec ANGULAR4, avec les Bibliothèques et les dépendances comme RGXBootstrap de coté client. Méthode Agile Scrum, UML. Création d’une applicaton web de réservation et vente de billet d’avion avec les technologies cités dessus.."
    },
    {
      id: 2,
      date: '2007 - 2011',
      schoolName: 'ISIT-COM (TUNISIE)',
      diplome: "Licence Appliquée en technologie du multimédia et web",
      description: "Apprendre les techniques de traitement des logiciels de retouches images, les logiciels de programmations, les notions et les algorithmiques des différentes langages de programmation et le programmation orienté objet."
    }
  ];
  constructor() { }
}
