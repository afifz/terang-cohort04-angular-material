import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable

export class PhotoService {

  constructor (private http: HttpClient) {

  }
  findPhoto(): Observable<Photo> {
    return this.http.get<Photo>('https://jsonplaceholder.typicode.com/users')
  }

  findPhotoByID(id:string):Observable<Photo> {
    return this.http.get<Photo>('https://jsonplaceholder.typicode.com/users/'+id)
  }

}
