import { Injectable } from '@angular/core';
import { CrudService } from '../crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService extends CrudService<any,number>{
   experiences = [
    {
      id: 0,
      date: '2018-2019',
      companyName: 'SCHNEIDER ELECTRIC - Carros',
      poste:"Développeur FrontEnd Angular",
      description:"Développement la partie front d'une application web, réalisation des test unitaire de développement et fonctionnel de l'api  pour le client shneider electric",
      technos:"ANGULAR 7 NODE JS SASS MICROSOFT AZURE GIT KARMA / JASMINE POSTMAN MULTI FACTOR AUTHENTICATION / JWT"
    },
    {
      id: 1,
      date: '2018',
      companyName: 'SII - Sophia',
      poste:"Développeur web fullStack",
      description:"",
      technos:"ANGULAR 5 BOOTSTRAP 4 TYPESCRIPT JAVASCRIPT HTML5, CSS3 JAVA, JEE HIBERNATE, JERSEY, SQL MAVEN"
    },
    {
      id: 2,
      date: '2018',
      companyName: 'SOFTEAM INSTITUTE– Mougins',
      poste:"Développeur Stagiaire FullStack JAVA / JEE - Angular",
      description:"Développement d'une application web qui gère le gestion de réservation des billets d'avion en ligne",
      technos:"ANGULAR 5 BOOTSTRAP 4 TYPESCRIPT JAVASCRIPT HTML5, CSS3 JAVA, JEE HIBERNATE, JERSEY, SQL MAVEN"
    },
    {
      id: 3,
      date: '2013-2015',
      companyName: 'CUISTO– Tunisie',
      poste:"Webmaster - infographiste",
      description:"Effectuer les maquettes graphiques et le visuels publicitaires. Administration et mise à jour du site web. Organisation aux événements et foires .Administrations des pages sur les réseaux sociaux. Assistance à la direction marketing.",
      technos:"HTML5, CSS3, JAVASCRIPT, PHP FILEZILLA, GOOGLE ANALYTICS ADOBE PHOTOSHOP, ILLUSTRATOR, INDESIGN, PREMIERE, AUDITION"
    },
    {
      id: 4,
      date: '2012/2013',
      companyName: 'CPM – TUNISIE',
      poste:"Responsable Technique",
      description:"Effectuer les maquettes graphiques et les visuels publicitaires pour des clients. Choix et validation des maquettes graphiques et Templates des sites. Rédaction et Intégrations du contenue. Mise en lignes et référencement naturelle des sites",
      technos:"HTML5, CSS3 JAVASCRIPT PHP, SQL PHOTOSHOP, ILLUSTRATOR, COREL DRAW, FTP SERVER, FILEZILLA, GOOGLEANALYTICS"
    },
    {
      id: 5,
      date: '2011/2012',
      companyName: 'CPN – TUNISIE',
      poste:"Formateur en Informatique",
      description:"Formateur en informatique bureautique, HTML, CSS, PHP, Photoshop, Adobe FLASH, WORD, EXEL, ACCESS et accompangnement des stagiaires dans leurs projets",
      technos:"HTML, CSS, JAVASCRIPT, PHP, SQL, OUTILS OFFICE, PHOTOSHOP, ILLUSTRATOR, DREAMWEAVER, ADOBE FLASH"
    },
    {
      id: 6,
      date: '2011',
      companyName: 'OMÉGA CALL CENTER',
      poste:"Projet de fin d'étude",
      description:"Stage en développement logiciels (4 mois) Conception et réalisation d’une application exécutable qui gère la gestion des employés et déterminer les fiches de paies pour un centre d’appel",
      technos:"FRAMEWORK WPF .NET/C# MYSQL ARCHITECTURE MVC"
    }
  ];
  constructor(protected _http: HttpClient) {
    super(_http,'url');
  }
}
