import { Contact } from "./contact.interface";
import { Item } from "./item.interface";

export interface Order {
  items: Item[];
  contact: Contact;
}
