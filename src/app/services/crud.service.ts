import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudOperations } from '../models/crud-operations.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CrudService<T,ID> implements CrudOperations<T,ID> {

  constructor(
    protected _http: HttpClient,
    protected _base: string
  ) { }


  save(payload: T): Observable<T> {
    return this._http.post<T>(this._base, payload,httpOptions);
  }

  update(id: ID, payload: T): Observable<T> {
    return this._http.put<T>(this._base + "/" + id, payload,httpOptions);
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(this._base + "/" + id,httpOptions);
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(this._base+'/' ,httpOptions)
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(this._base + '/' + id,httpOptions);
  }
}
