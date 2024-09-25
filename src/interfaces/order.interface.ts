import { Contact } from "./contact.interface";
import { OrderItem } from "./order-item.interface";

export interface Order {
  items: OrderItem[];
  contact: Contact;
}
