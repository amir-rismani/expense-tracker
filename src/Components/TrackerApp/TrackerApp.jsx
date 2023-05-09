import { useState } from "react";
import Transactions from "../Transactions/Transactions";
import Overview from "../Overview/Overview";

const TrackerApp = () => {
    const [transactions, setTransactions] = useState([
        { id: Date.now() - 20, amount: 20, description: "record 1", type: "income" },
        { id: Date.now() - 50, amount: 50, description: "record 2", type: "expense" }
    ]);

    const addTransactionHandler = (formValue) => {
        setTransactions([...transactions, { ...formValue, id: Date.now() }])
    }
    return (
        <div className="container">
            <header className="App-header">
                <h1>Expense Tracker</h1>
            </header>
            <Overview onAddTransaction={addTransactionHandler} />
            <Transactions transactions={transactions} />
        </div>
    );
};

export default TrackerApp;
