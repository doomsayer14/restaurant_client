import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

const USER_API = "http://localhost:8080/api/order/";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder()
}
