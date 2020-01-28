import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../crud.service';

@Injectable()
export class CandidateService extends CrudService<any,number>{
    constructor(protected _http: HttpClient) {
      super(_http,'api/candidate');
    }
}
