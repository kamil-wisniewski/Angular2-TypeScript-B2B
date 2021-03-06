import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { JsonHttp } from "./../../core/services/";
import {Basket} from '../../core/dto';

const url = `/api/basket/my`;
@Injectable()
export class BasketService {
    constructor(private http: JsonHttp) {

    }

 getProductByCategory(): Observable<Basket[]> {
    return this.http.get(url)
    .map(res => res.json());
   
  }

  deleteAllBasket(): Observable<Response>{
  return  this.http.delete('/api/basket');
  
  }

  confirmTransaction():Observable<Response>{
    return this.http.post('api/transaction',null);
  }


}