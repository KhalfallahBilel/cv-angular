import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudOperations } from '../models/crud-operations.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T,ID> implements CrudOperations<T,ID> {

  constructor(
    protected _http: HttpClient,
    protected _base: string
  ) { }

  httpOptions = {
    headers: new HttpHeaders().set('Authorization', `Bearer `+localStorage.getItem('token')),
    header: new HttpHeaders().set('Content-Type', 'multipart/form-data')
  };

  save(payload: T): Observable<T> {
    return this._http.post<T>(this._base, payload,this.httpOptions);
  }

  update(id: ID, payload: T): Observable<T> {
    return this._http.put<T>(this._base + "/" + id, payload,this.httpOptions);
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(this._base + "/" + id,this.httpOptions);
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(this._base+'/' ,this.httpOptions)
  }

  delete(id: ID): Observable<T> {
    return this._http.delete<T>(this._base + '/' + id,this.httpOptions);
  }
}
