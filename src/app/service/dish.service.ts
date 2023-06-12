import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dish} from "../models/Dish";

const DISH_API = "http://localhost:8080/api/dish/";

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) {
  }

  getDish(id: number): Observable<any> {
    return this.http.get(DISH_API + id);
  }

  getAllDishes(): Observable<any> {
    return this.http.get(DISH_API + "all");
  }

  createDish(dish: Dish): Observable<any> {
    return this.http.post(DISH_API + "manager/create", dish);
  }

  deleteDish(id: number): Observable<any> {
    return this.http.delete(DISH_API + "manager/" + id);
  }

}
