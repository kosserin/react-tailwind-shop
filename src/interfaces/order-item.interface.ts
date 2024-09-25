import { Item } from "./item.interface";
import { ItemSize } from "./size.interface";

export interface OrderItem extends Item {
  size: ItemSize;
}
