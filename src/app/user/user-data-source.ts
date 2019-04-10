import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {PhotoService} from '../../services/photo.service';

export class UserDataSource extends DataSource<any> {
  constructor (private photoService: PhotoService) {
    super();
  }
  connect(): Observable<[]> {
    return this.photoService.findPhoto();
  }
  disconnect(){
  }

}
