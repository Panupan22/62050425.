import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map((transactions) => (
          <li class="minus">
            {transactions.text} <span>-$400</span>
            <button class="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
