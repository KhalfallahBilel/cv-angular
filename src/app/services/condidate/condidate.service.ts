import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CondidateService {
  condidate = 
    {
      id:1,
      firstName: "KHALFALLAH",
      lastName: "BILEL",
      spec: "Développeur FullStack Angular / Java JEE",
      age: "33",
      mob: "07 81 39 23 85",
      address: "06100 Nice, France",
      email: "khalfallah.bilel@gmail.com",
      link: "https://github.com/KhalfallahBilel",
      about: "Intéressé par l/’informatique depuis mon enfance, Passionné ensuite par le Web et son évolution j’ai choisi de spécialiser mes études et ma vie professionnelle dans le développement web.",
      picture: "string",
    }
  
  constructor() { }
}
