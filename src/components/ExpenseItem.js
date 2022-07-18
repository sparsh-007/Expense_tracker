import "../components/ExpenseItem.css";

function ExpenseItem(props) {
const month = props.date.toLocaleString("en-us", { month: "long" });
const day=props.date.getDate();
const year=props.date.getFullYear();
  return (
    <div>
      <div className="expense-item">
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">{year}</div>
          <div className="expense-date__day">{day}</div>
        </div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
