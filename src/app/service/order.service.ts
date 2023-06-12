import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../models/Order";
import {Observable} from "rxjs";

const ORDER_API = 'http://localhost:8080/api/order/';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<any> {
    return this.http.post(ORDER_API, order)
  }

  getOrder(id: number): Observable<any> {
    return this.http.get(ORDER_API + id)
  }

  addDishToOrder(orderId: number, dishId: number): Observable<any> {
    return this.http.post(ORDER_API + orderId + "/" + dishId, null);
  }

  removeDishFromOrder(orderId: number, dishId: number): Observable<any> {
    return this.http.delete(ORDER_API + orderId + "/" + dishId);
  }
}
