import {User} from "./User";
import {Dish} from "./Dish";

export interface Order {
  id?: number;
  dishList: Dish[];
  price: number;
  user: User;
  orderStatus: number;
}
