import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../user/photo-model';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'trg-photo-detail',
  templateUrl: 'user-detailpage.html',
  styleUrls: ['./users-detailpage.scss']
})

export class UserDetailPage {

  user$: Observable<User> = null;

  constructor(private userService: UserService,
              private route: ActivatedRoute
  ) {
    this.route.params.subscribe((param: { id: string }) => {
      this.user$ = userService.findUserByID(param.id);
    });
  }
}
