import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class UserService {

  constructor (private http: HttpClient) {

  }
  findUser(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  findUserByID(id:string):Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/'+id)
  }

}
