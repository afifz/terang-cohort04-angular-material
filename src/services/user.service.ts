import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../app/user/photo-model';

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
