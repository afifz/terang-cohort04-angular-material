import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserDataSource} from './user-data-source';
import {UserService} from '../../services/user.service';
import {User} from './photo-model';


@Component ({
  selector: 'trg-user-list',
  templateUrl: 'user-list.page.html' ,
  styleUrls: ['user-list.page.scss'],
})

export class UserListPage implements OnInit {
  public columns = ['id', 'name', 'username', 'email'];
  public dataSource: UserDataSource;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new UserDataSource(this.userService);
  }


  view(user: User): void {
    this.router.navigate(['/user/list/', user.id])
  }

}
