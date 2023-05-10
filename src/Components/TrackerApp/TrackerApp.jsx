import { useEffect, useState } from "react";
import Transactions from "../Transactions/Transactions";
import Overview from "../Overview/Overview";

const TrackerApp = () => {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);

    const [transactions, setTransactions] = useState([]);

    const addTransactionHandler = (formValue) => {
        setTransactions([...transactions, { ...formValue, id: Date.now() }])
    }

    useEffect(() => {
        let totalExpense = 0;
        let totalIncome = 0;
        transactions.forEach(transaction => transaction.type === 'expense' ? totalExpense += parseInt(transaction.amount) : totalIncome += parseInt(transaction.amount))
        setExpense(totalExpense);
        setIncome(totalIncome);
    }, [transactions]);
    return (
        <div className="container">
            <header className="App-header">
                <h1>Expense Tracker</h1>
            </header>
            <Overview expense={expense} income={income} onAddTransaction={addTransactionHandler} />
            <Transactions transactions={transactions} />
        </div>
    );
};

export default TrackerApp;
