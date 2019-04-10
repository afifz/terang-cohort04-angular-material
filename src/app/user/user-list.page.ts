import {Component, OnInit} from '@angular/core';
import {ApprenticeDataSource} from '../academy/apprentice.data-source';
import {AcademyService} from '../../services/academy.service';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {UserDataSource} from './user-data-source';
import {UserService} from '../../services/user.service';
import {Apprentice} from '../academy/apprentice.model';
import {User} from './photo-model';


@Component ({
  selector: 'trg-user-list',
  templateUrl: 'user-list.page.html' ,
  styleUrls: ['user-list.page.scss'],
})

export class UserListPage implements OnInit{
  public columns = ['id', 'name', 'username', 'email'];
  public dataSource: UserDataSource;

  constructor(private userService: UserService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.dataSource = new UserDataSource(this.userService);
}
}

view(user: User): void {
  this.router.navigate('user/list', user.id)
}
