import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Micropost} from "../../core/domains";
import {objToSearchParams} from "../../core/services/helpers";
import {JsonHttp} from "../../core/services";

const url = (userId: string): string => `/api/users/${userId}/microposts`;

@Injectable()
export class UserSoldListService {

  constructor(private http: JsonHttp) {
  }

   getBoughtProduct(): Observable<Micropost[]> {
    return this.http.get('api/transaction/bought')
      .map(res => res.json())
      ;
  }

   getBoughtProductbyTransaction(id:any): Observable<any> {
    return this.http.get(`api/transaction/products/${id}`)
      .map(res => res.json())
      ;
  }
    getSoldProduct(): Observable<any> {
    return this.http.get('api/transaction/sold')
      .map(res => res.json())
      ;
  }


 
}