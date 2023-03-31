import "./Expenses.css";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const items = props.expenseList;

  const [selectedYear, setSelectedYear] = useState("2020");

  const expenseFilterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredItems = items.filter(
    (expense) => expense.date.getFullYear() === Number(selectedYear)
  );

  return (
    <li>
      <Card className='expenses'>
        <ExpensesFilter
          select={selectedYear}
          onAddExpenseFilter={expenseFilterHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList expenseItems={filteredItems} />
      </Card>
    </li>
  );
};

export default Expenses;
