import { useState } from "react";
import Transactions from "../Transactions/Transactions";
import Overview from "../Overview/Overview";

const TrackerApp = () => {
    const [transactions, setTransactions] = useState([]);

    return (
        <div className="container">
            <header className="App-header">
                <h1>Expense Tracker</h1>
            </header>
            <Overview />
            <Transactions transactions={transactions} />
        </div>
    );
};

export default TrackerApp;
