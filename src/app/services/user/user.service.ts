import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }
}
