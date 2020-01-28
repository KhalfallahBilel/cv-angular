import { Injectable } from '@angular/core';
import { CrudService } from '../crud.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrainingService extends CrudService<any, number>{
  
  constructor(protected _http: HttpClient) {
    super(_http,'api/trainings');
  }
}
