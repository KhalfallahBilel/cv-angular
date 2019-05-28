import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  formations = [
    {
      id: 1,
      date: '2011/2012',
      schoolName: 'aaa',
      diplome:"nnnnn",
      description:"gjf"
    },
    {
      id: 2,
      date: '2011/2012',
      schoolName: 'aaa',
      diplome:"nnnnn",
      description:"gjf"
    },
    {
      id: 3,
      date: '2011/2012',
      schoolName: 'aaa',
      diplome:"nnnnn",
      description:"gjf"
    }
  ];
  constructor() { }
}
