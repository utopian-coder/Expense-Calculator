import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredItems = props.expenseItems;

  if (filteredItems.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }

  if (filteredItems.length > 0) {
    return (
      <ul className='expenses-list'>
        {filteredItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </ul>
    );
  }
};

export default ExpensesList;