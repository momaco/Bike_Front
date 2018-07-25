import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http: HttpClient) { }

  getBikes() {
    // tslint:disable-next-line:prefer-const
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/bikes',
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  getBike (id: number) {
    // tslint:disable-next-line:prefer-const
    let token = localStorage.getItem('access_token');
    return this.http.get('/server/api/v1/bikes' + id,
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }

  createBikeRegistration(bike) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }
}
