import { Injectable } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { Language } from 'src/app/models/language';
import { Experience } from 'src/app/models/experience';
import { Training } from 'src/app/models/training';
import { Candidate } from 'src/app/models/candidate';

@Injectable()
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    let skills = [
      {
        id: 1,
        skill: 'HTML JavaScript SQL CSS3 J2EE PHP HTML5 TypeScript JAVA',
        skillName: 'Languages et WEB',
        value: 4
      },
      {
        id: 2,
        skill: 'WebServices Angular 2+ NodeJS REST Hibernate Spring',
        skillName: 'Farmeworks',
        value: 4
      },
      {
        id: 3,
        skill: 'NoSQL MySQL',
        skillName: 'BDD',
        value: 3
      },
      {
        id: 4,
        skill: 'Visual Studio GIT NetBeans Eclipse Maven Tomcat',
        skillName: 'Outils',
        value: 5
      },
      {
        id: 5,
        skill: 'Adobe Creative Suite',
        skillName: 'Multimédia',
        value: 4
      }
    ];
    let languages = [
      {
        id: 1,
        languageName: 'français',
        value: 5
      },
      {
        id: 2,
        languageName: 'arabe',
        value: 5
      },
      {
        id: 3,
        languageName: 'anglais',
        value: 3
      }
    ];
    let experiences = [
      {
        id: 1,
        date: '2018-2019',
        companyName: 'SCHNEIDER ELECTRIC - Carros',
        poste: "Développeur FrontEnd Angular",
        description: "Développement la partie front d'une application web, réalisation des test unitaire de développement et fonctionnel de l'api  pour le client shneider electric",
        technos: "ANGULAR 7 NODE JS SASS MICROSOFT AZURE GIT KARMA / JASMINE POSTMAN MULTI FACTOR AUTHENTICATION / JWT"
      },
      {
        id: 2,
        date: '2018',
        companyName: 'SII - Sophia',
        poste: "Développeur web fullStack",
        description: "",
        technos: "ANGULAR 5 BOOTSTRAP 4 TYPESCRIPT JAVASCRIPT HTML5, CSS3 JAVA, JEE HIBERNATE, JERSEY, SQL MAVEN"
      },
      {
        id: 3,
        date: '2018',
        companyName: 'SOFTEAM INSTITUTE– Mougins',
        poste: "Développeur Stagiaire FullStack JAVA / JEE - Angular",
        description: "Développement d'une application web qui gère le gestion de réservation des billets d'avion en ligne",
        technos: "ANGULAR 5 BOOTSTRAP 4 TYPESCRIPT JAVASCRIPT HTML5, CSS3 JAVA, JEE HIBERNATE, JERSEY, SQL MAVEN"
      },
      {
        id: 4,
        date: '2013-2015',
        companyName: 'CUISTO– Tunisie',
        poste: "Webmaster - infographiste",
        description: "Effectuer les maquettes graphiques et le visuels publicitaires. Administration et mise à jour du site web. Organisation aux événements et foires .Administrations des pages sur les réseaux sociaux. Assistance à la direction marketing.",
        technos: "HTML5, CSS3, JAVASCRIPT, PHP FILEZILLA, GOOGLE ANALYTICS ADOBE PHOTOSHOP, ILLUSTRATOR, INDESIGN, PREMIERE, AUDITION"
      },
      {
        id: 5,
        date: '2012/2013',
        companyName: 'CPM – TUNISIE',
        poste: "Responsable Technique",
        description: "Effectuer les maquettes graphiques et les visuels publicitaires pour des clients. Choix et validation des maquettes graphiques et Templates des sites. Rédaction et Intégrations du contenue. Mise en lignes et référencement naturelle des sites",
        technos: "HTML5, CSS3 JAVASCRIPT PHP, SQL PHOTOSHOP, ILLUSTRATOR, COREL DRAW, FTP SERVER, FILEZILLA, GOOGLEANALYTICS"
      },
      {
        id: 6,
        date: '2011/2012',
        companyName: 'CPN – TUNISIE',
        poste: "Formateur en Informatique",
        description: "Formateur en informatique bureautique, HTML, CSS, PHP, Photoshop, Adobe FLASH, WORD, EXEL, ACCESS et accompangnement des stagiaires dans leurs projets",
        technos: "HTML, CSS, JAVASCRIPT, PHP, SQL, OUTILS OFFICE, PHOTOSHOP, ILLUSTRATOR, DREAMWEAVER, ADOBE FLASH"
      },
      {
        id: 7,
        date: '2011',
        companyName: 'OMÉGA CALL CENTER',
        poste: "Projet de fin d'étude",
        description: "Stage en développement logiciels (4 mois) Conception et réalisation d’une application exécutable qui gère la gestion des employés et déterminer les fiches de paies pour un centre d’appel",
        technos: "FRAMEWORK WPF .NET/C# MYSQL ARCHITECTURE MVC"
      }
    ];
    let trainings = [
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
    let candidate = [
      {
        id:1,
        firstName:'KHALFALLAH',
        lastName:'BILEL',
        spec:'DÉVELOPPEUR WEB FULL STACK',
        mob:'0781392385',
        address:'06100 Nice, France',
        email:'khalfallah.bilel@gmail.com',
        link:'https://github.com/KhalfallahBilel',
        about:'Intéressé par l/’informatique depuis mon enfance, Passionné ensuite par le Web et son évolution j’ai choisi de spécialiser mes études et ma vie professionnelle dans le développement web.',
        picture:'../../assets/profile.jpg'        
      }
    ];
    return { skills, languages, experiences, trainings,candidate };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId<T extends Skill | Language | Experience | Training | Candidate>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
}
