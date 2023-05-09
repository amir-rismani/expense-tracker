import { useState } from "react";
import Transaction from "../Transaction/Transaction";

const Transactions = (transactions) => {
    const [search, setSearch] = useState("");

    const changeHandler = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div className="d-flex flex-column">
            <h2 className="text-left">Transactions</h2>
            <input class="bg-light-gray" type="text" value={search} onChange={(event) => changeHandler(event)} placeholder="Search..." />
            {/* <div>{transactions.map(transaction => <Transaction transaction={transaction} key={transaction.id} />)}</div> */}
        </div>
    );
}

export default Transactions;