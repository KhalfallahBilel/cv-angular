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
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
