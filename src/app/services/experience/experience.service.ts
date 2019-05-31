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
      date: '2018',
      companyName: 'SII - Sophia',
      poste:"Développeur web fullStack",
      description:"Manœuvre en bâtiment de construction des piscines. Technicien de revêtement des piscines avec des produits composites (Résine)",
      technos:"ANGULAR 5 BOOTSTRAP 4 TYPESCRIPT JAVASCRIPT HTML5, CSS3 JAVA, JEE HIBERNATE, JERSEY, SQL MAVEN"
    },
    {
      id: 2,
      date: '2018',
      companyName: 'SOFTEAM INSTITUTE– Mougins',
      poste:"Développeur Stagiaire FullStack JAVA / JEE - Angular",
      description:"Manœuvre en bâtiment de construction des piscines. Technicien de revêtement des piscines avec des produits composites (Résine)",
      technos:"ANGULAR 5 BOOTSTRAP 4 TYPESCRIPT JAVASCRIPT HTML5, CSS3 JAVA, JEE HIBERNATE, JERSEY, SQL MAVEN"
    },
    {
      id: 3,
      date: '2013-2015',
      companyName: 'CUISTO– Tunisie',
      poste:"Webmaster - infographiste",
      description:"gjf",
      technos:"HTML5, CSS3, JAVASCRIPT, PHP FILEZILLA, GOOGLE ANALYTICS ADOBE PHOTOSHOP, ILLUSTRATOR, INDESIGN, PREMIERE, AUDITION"
    },
    {
      id: 4,
      date: '2012/2013',
      companyName: 'CPM – TUNISIE',
      poste:"Responsable Technique",
      description:"gjf",
      technos:"HTML5, CSS3 JAVASCRIPT PHP, SQL PHOTOSHOP, ILLUSTRATOR, COREL DRAW, FTP SERVER, FILEZILLA, GOOGLEANALYTICS"
    },
    {
      id: 5,
      date: '2011/2012',
      companyName: 'CPN – TUNISIE',
      poste:"Formateur en Informatique",
      description:"gjf",
      technos:"HTML, CSS, JAVASCRIPT, PHP, SQL, OUTILS OFFICE, PHOTOSHOP, ILLUSTRATOR, DREAMWEAVER, ADOBE FLASH"
    },
    {
      id: 6,
      date: '2011',
      companyName: 'OMÉGA CALL CENTER',
      poste:"Projet de fin d'étude",
      description:"gjf",
      technos:"FRAMEWORK WPF .NET/C# MYSQL ARCHITECTURE MVC"
    }
  ];
  constructor() { }
}
