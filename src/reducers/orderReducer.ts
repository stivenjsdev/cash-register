import { MenuItem, OrderItem } from "../types";

type OrderState = {
  order: OrderItem[];
  tip: number;
};

export type OrderActions =
  | { type: "ADD_ITEM"; payload: { item: MenuItem } }
  | { type: "REMOVE_ITEM"; payload: { id: MenuItem["id"] } }
  | { type: "SET_TIP"; payload: { tip: number } }
  | { type: "PLACE_ORDER" };

export const initialState: OrderState = {
  order: [],
  tip: 0,
};

export const reducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  if (action.type === "ADD_ITEM") {
    const itemExits = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id
    );

    let updatedOrder: OrderItem[] = [];

    if (itemExits) {
      updatedOrder = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
    } else {
      const newItem: OrderItem = { ...action.payload.item, quantity: 1 };
      updatedOrder = [...state.order, newItem];
    }
    return {
      ...state,
      order: updatedOrder,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedOrder = state.order.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      order: updatedOrder,
    };
  }

  if (action.type === "SET_TIP") {
    return {
      ...state,
      tip: action.payload.tip,
    };
  }

  if (action.type === "PLACE_ORDER") {
    console.log('generating Order...');
    return {
      ...state,
      order: [],
      tip: 0,
    };
  }

  return state;
};
