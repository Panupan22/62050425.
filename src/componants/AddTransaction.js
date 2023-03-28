import React, { usestate } from "react";

export const AddTransaction = () => {
  const [text, setText] = usestate("");
  const [amount, setAmount] = usestate(0);
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div class="form-control">
          <label for="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div class="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
