import React, { createContext, useState } from "react";
import { OrderItem } from "./interfaces/order-item.interface";

const OrderContext = createContext({
  order: {
    items: [],
    contact: {
      firstame: "",
      lastname: "",
      phone: "",
      email: "",
      city: "",
      address: "",
    },
  },
  addItem: (item) => {},
  removeItem: (item) => {},
  clearCart: () => {},
});

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
    items: [],
    contact: {
      firstame: "",
      lastname: "",
      phone: "",
      email: "",
      city: "",
      address: "",
    },
  });

  const addItem = (item: OrderItem) => {
    const updatedItems = [...order.items];
    updatedItems.push(item);
    setOrder({ ...order, items: updatedItems });
  };

  const removeItem = (id: number) => {
    const updatedItems = [...order.items];
    updatedItems.filter((item) => item.id !== id);
    setOrder({ ...order, items: updatedItems });
  };

  const clearCart = () => {
    setOrder({ ...order, items: [] });
  };

  return (
    <OrderContext.Provider
      value={{ order: order, addItem, removeItem, clearCart }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
