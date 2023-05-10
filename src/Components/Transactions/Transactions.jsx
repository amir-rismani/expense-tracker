import { useEffect, useState } from "react";
import Transaction from "../Transaction/Transaction";

const Transactions = ({ transactions }) => {
    const [searchValue, setSearchValue] = useState("");
    const [filteredTransactions, setFilteredTransactions] = useState(transactions)

    const changeHandler = (event) => {
        setSearchValue(event.target.value);
        filterTransaction(event.target.value);
    }

    const filterTransaction = (search) => {
        if (!search) {
            setFilteredTransactions(transactions);
            return;
        }
        const filteredTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(search.toLowerCase()))
        setFilteredTransactions(filteredTransactions)
    }

    useEffect(() => {
        filterTransaction(searchValue);
    }, [transactions])

    return (
        <div className="d-flex flex-column">
            <h2 className="text-left">Transactions</h2>
            <input class="bg-light-gray" type="text" value={searchValue} onChange={changeHandler} placeholder="Search..." />
            <div className=" mx-1">
                {
                    filteredTransactions.length ?
                    <>
                        <div className="d-flex justify-content-between align-item-center bg-light-gray border-radius p-0.5 mb-0.5">
                            <span class="text-left flex-basis-1/3 font-bold">Description</span>
                            <span class="text-center flex-basis-1/3 font-bold">Amount</span>
                            <span class="text-center flex-basis-1/3 font-bold">Type</span>
                        </div>
                        {filteredTransactions.map(transaction => <Transaction transaction={transaction} key={transaction.id} />)}
                    </>
                    : <div>There are no transactions available...</div>
                }
            </div>


        </div>
    );
}

export default Transactions;