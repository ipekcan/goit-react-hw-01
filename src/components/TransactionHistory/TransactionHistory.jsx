import transactions from "../../transactions.json";
import Item from "../Item/Item.jsx";
import thStyles from "./TransactionHistory.module.css";

const TransactionHistory = ({items}) => {
    return (
        <table className={`${thStyles.transactions}`}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.transactions.map(({id, type, amount, currency}) => (
                    <Item
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                    />
                ))}   
            </tbody>
        </table>
    );
};

export default TransactionHistory;