import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";

function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={s.elementHistory}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionItem;
