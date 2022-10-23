import React from "react";
import { useSearchParams } from "react-router-dom";

import style from "../../styles/GrpExpenses.module.css";

function GrpExpenses() {
  let expenses = [
    {
      id: 1,
      name: "Food",
      amount: 100,
      yourExpense: -50,
      date: "2021-01-01",
    },
    {
      id: 2,
      name: "Travel",
      amount: 200,
      yourExpense: 100,
      date: "2021-01-02",
    },
    {
      id: 3,
      name: "Food",
      amount: 400,
      yourExpense: 0,
      date: "2021-01-04",
    },
    {
      id: 4,
      name: "Food",
      amount: 300,
      yourExpense: 150,
      date: "2021-01-03",
    },
    {
      id: 5,
      name: "Travel",
      amount: 200,
      yourExpense: 100,
      date: "2021-01-02",
    },
    {
      id: 6,
      name: "Food",
      amount: 400,
      yourExpense: 0,
      date: "2021-01-04",
    },
    {
      id: 7,
      name: "Food",
      amount: 300,
      yourExpense: -150,
      date: "2021-01-03",
    },
    {
      id: 8,
      name: "Travel",
      amount: 200,
      yourExpense: 100,
      date: "2021-01-02",
    },
  ];
  const [searchParams, setSearchParams] = useSearchParams();
  let grpname = searchParams.get("groupname");
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <div className={style.header}>
          <h1 className={style.heading}>{grpname}</h1>
        </div>
        <div
          className={style.expense}
          style={{
            fontWeight: 700,
            margin: "0",
            padding: "1.5vh 0",
            backgroundColor: "#0000ff3b",
          }}
        >
          <div className={style.expense_date_header}>Date</div>
          <div className={style.expense_name_header}>Name</div>
          <div className={style.expense_amount_header}>Total Bill</div>
          <div className={style.expense_yourExpense_header}>Your Expense</div>
        </div>
        <div className={style.expenses}>
          {expenses.map((expense, i) => (
            <div key={i} className={style.expense}>
              <div className={style.expenseDate}>{expense.date}</div>
              <div className={style.expenseName}>{expense.name}</div>
              <div className={style.expenseAmount}>₹{expense.amount}</div>
              {/* Your Expense */}
              {expense.yourExpense === 0 ? (
                <div className={style.notInvolved}>You were not Involved</div>
              ) : expense.yourExpense > 0 ? (
                <div className={style.youBorrowed}>
                  you borrowed ₹{expense.yourExpense}
                </div>
              ) : (
                <div className={style.youLent}>
                  you lent ₹{Math.abs(expense.yourExpense)}
                </div>
              )}
            </div>
          ))}
        </div>
        <button className={style.add}>Add Expense</button>
        <div className={style.grpFooter}>
          <button>Settle up</button>
          <button>Balances</button>
          <button>Totals</button>
        </div>
      </div>
    </div>
  );
}

export default GrpExpenses;
