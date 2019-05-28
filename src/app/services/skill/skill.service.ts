import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skills = [
    {
      id: 1,
      skillName: 'brebe',
      value:75
    },
    {
      id: 2,
      skillName: 'brebe',
      value:75
    },
    {
      id: 3,
      skillName: 'brebe',
      value:75
    }
  ];
  constructor() { }
}
