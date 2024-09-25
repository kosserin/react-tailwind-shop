import React, { createContext, useState } from "react";
import { OrderItem } from "./interfaces/order-item.interface";
import { Order } from "./interfaces/order.interface";

const OrderContext = createContext({
  order: {
    items: [] as OrderItem[],
    contact: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      city: "",
      address: "",
    },
  },
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  getOrderFromStorage: () => {},
});

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState<Order>({
    items: [],
    contact: {
      firstname: "",
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
    const updatedOrder = { ...order, items: updatedItems };
    setOrder(updatedOrder);
    storeOrder(updatedOrder);
  };

  const removeItem = (id: number) => {
    let updatedItems = [...order.items];
    updatedItems = updatedItems.filter((item) => item.id !== id);
    const updatedOrder = { ...order, items: updatedItems };
    setOrder(updatedOrder);
    storeOrder(updatedOrder);
  };

  const clearCart = () => {
    setOrder({ ...order, items: [] });
  };

  const storeOrder = (order: Order) => {
    localStorage.setItem("order", JSON.stringify(order));
  };

  const getOrderFromStorage = () => {
    const order = JSON.parse(localStorage.getItem("order"));
    if (order) {
      setOrder(order);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        order: order,
        addItem,
        removeItem,
        clearCart,
        getOrderFromStorage,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
