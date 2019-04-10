import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {UserService} from '../../services/user.service';
import {User} from './photo-model';

export class UserDataSource extends DataSource<any> {
  constructor (private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.findUser();
  }
  disconnect(){
  }
}


