import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {PhotoService} from '../../services/photo.service';

export class PhotoDataSource extends DataSource<any> {
  constructor (private photoService: PhotoService) {
    super();
  }
  connect(): Observable<Photo[]> {
    return this.photoService.findPhoto();
  }
  disconnect(){
  }
  
}
