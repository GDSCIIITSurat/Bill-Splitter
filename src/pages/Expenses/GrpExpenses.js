import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import style from "../../styles/GrpExpenses.module.css";

function GrpExpenses() {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const grpname = searchParams.get("groupname");
  // use this grpname to fetch data from backend
  const width = useWindowWidth();
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
          <p className={style.expense_date_header}>
            {width >= 650 ? "Date" : "Dt."}
          </p>
          <p className={style.expense_name_header}>Name</p>
          <p className={style.expense_amount_header}>Total Bill</p>
          <p className={style.expense_yourExpense_header}>Your Expense</p>
        </div>
        <div className={style.expenses}>
          {expenses.map((expense, i) => (
            <div key={i} className={style.expense}>
              <div className={style.expenseDate}>
                <Date date={expense.date} width={width} />
              </div>
              <div className={style.expenseName}>{expense.name}</div>
              <div className={style.expenseAmount}>₹{expense.amount}</div>
              {/* Your Expense */}
              <YourExpense yourExpense={expense.yourExpense} width={width} />
            </div>
          ))}
        </div>
        <div className={style.grpFooter}>
          <button>Add Expense</button>
          <button>Settle up</button>
          <button>Totals</button>
        </div>
      </div>
    </div>
  );
}

export default GrpExpenses;

// Display date

function Date(props) {
  if (props.width > 1000) {
    return props.date;
  } else if (props.width > 650 && props.width < 1000) {
    return (
      dateConverter(props.date).Month + " " + dateConverter(props.date).Date
    );
  } else {
    return (
      <div className={style.date}>
        <p className={style.dateMonth}>{dateConverter(props.date).Month}</p>
        <p>{dateConverter(props.date).Date}</p>
      </div>
    );
  }
}

//function to Display your Expense

function YourExpense(props) {
  if (props.yourExpense === 0) {
    if (props.width < 650) {
      return <div className={style.notInvolved}>not Involved</div>;
    }
    return <div className={style.notInvolved}>You were not Involved</div>;
  } else if (props.yourExpense > 0) {
    if (props.width < 650) {
      return (
        <div className={style.youBorrowed}>
          <p className={style.text}>you borrowed</p>
          <p>₹{props.yourExpense}</p>
        </div>
      );
    }
    return (
      <div className={style.youBorrowed}>you borrowed ₹{props.yourExpense}</div>
    );
  } else {
    if (props.width < 650) {
      return (
        <div className={style.youLent}>
          <p className={style.text}>you lent</p>
          <p>₹{Math.abs(props.yourExpense)}</p>
        </div>
      );
    }
    return (
      <div className={style.youLent}>
        you lent ₹{Math.abs(props.yourExpense)}
      </div>
    );
  }
}

// Custom hook for width

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}

// function for date format conversion

function dateConverter(date) {
  let month = date[5] + date[6];
  let Month, Date;
  switch (month) {
    case "01":
      Month = "Jan";
      break;
    case "02":
      Month = "Feb";
      break;
    case "03":
      Month = "Mar";
      break;
    case "04":
      Month = "Apr";
      break;
    case "05":
      Month = "May";
      break;
    case "06":
      Month = "Jun";
      break;
    case "07":
      Month = "Jul";
      break;
    case "08":
      Month = "Aug";
      break;
    case "09":
      Month = "Sep";
      break;
    case "10":
      Month = "Oct";
      break;
    case "11":
      Month = "Nov";
      break;
    case "12":
      Month = "Dec";
      break;
    default:
      break;
  }
  Date = date[8] + date[9];
  return { Month, Date };
}
