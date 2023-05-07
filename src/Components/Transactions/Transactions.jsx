import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const Transactions = ({ transactions }) => {
    const [search, setSearch] = useState("");

    const changeHandler = (event) => {
        setSearch(event.target.value);
    }
    return (
        <div className="d-flex flex-column">
            <h2 className="text-left">Transactions</h2>
            <input type="text" value={search} onChange={(event) => changeHandler(event)} placeholder="Search..." />
        </div>
    );
}

export default Transactions;