import { useState } from "react";
import TransactionForm from "../TransactionForm/TransactionForm";

const Overview = ({ onAddTransaction }) => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [isToggle, setIsToggle] = useState(false);

    const toggleHandler = () => {
        setIsToggle((prevState) => !prevState)
    }
    return (
        <div>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-between align-item-center">
                    <h2>Balance: ${income - expense}</h2>
                    <button onClick={toggleHandler}>{isToggle ? 'Cancel' : 'Add'}</button>
                </div>
                {isToggle && <TransactionForm addTransaction={onAddTransaction} />}
            </div>
            <div className="d-flex justify-content-between align-item-center column-gap">
                <div className="flex-grow-1 d-flex align-item-start flex-column border-light-1 border-radius p-1">
                    <span className="font-large">Expense</span>
                    <span className="font-larger font-bold text-danger">${expense}</span>
                </div>
                <div className="flex-grow-1 d-flex align-item-start flex-column border-light-1 border-radius p-1">
                    <span className="font-large">Income</span>
                    <span className="font-larger font-bold text-success">${income}</span>
                </div>
            </div>
        </div>
    );
}

export default Overview;