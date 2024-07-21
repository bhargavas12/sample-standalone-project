import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCreationObject } from '../../../model/user';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  GetToken(): Observable<any> {
    return this.httpClient.post('https://localhost:7147/api/auth/token', null, {responseType: 'text'});
  }

  CreateUser(requestData: UserCreationObject, headers: any): Observable<void> {
      return this.httpClient.post<void>('https://localhost:7147/api/user', requestData, { headers: headers });
  }

  GetUsers(headers: any): Observable<any> {
    return this.httpClient.get('https://localhost:7147/api/user', { headers: headers });
  }
}
