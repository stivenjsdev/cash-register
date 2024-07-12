import { Dispatch } from "react";
import { OrderActions } from "../reducers/orderReducer";
import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
};

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <>
      <button
        className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
        onClick={() => dispatch({ type: "ADD_ITEM", payload: { item } })}
      >
        <p>{item.name}</p>
        <p className="font-black">{item.price}</p>
      </button>
    </>
  );
}
