import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
   experiences = [
    {
      id: 1,
      date: '2011/2012',
      companyName: 'aaa',
      poste:"nnnnn",
      description:"gjf",
      technos:"cdsqzc"
    },
    {
      id: 2,
      date: '2011/2012',
      companyName: 'aaa',
      poste:"nnnnn",
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
