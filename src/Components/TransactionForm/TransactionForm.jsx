import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
    const [formValue, setFormValue] = useState({
        amount: "",
        description: "",
        type: "expense"
    })
    // const [amount, setAmount] = useState("");
    // const [description, setDescription] = useState("");
    // const [type, setType] = useState("");

    const changeHandler = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (formValue.amount && formValue.description && formValue.type) {
            addTransaction(formValue.amount, formValue.description, formValue.type);
            setFormValue({
                amount: "",
                description: "",
                type: "Expense"
            })
        }
        else alert("Please enter all inputs.")
    }

    return (
        <div className="border-light-1 p-1 mb-1 border-radius">
            <form onSubmit={submitHandler} className="d-flex flex-column">
                <input type="number" placeholder="Amount" name="amount" value={formValue.amount} onChange={changeHandler} />
                <input type="text" placeholder="Description" name="description" value={formValue.description} onChange={changeHandler} />
                <div className="d-flex column-gap">
                    <label>
                        <input type="radio" checked={formValue.type === 'expense'} value="expense" name="type" onChange={changeHandler} /> Expense
                    </label>
                    <label>
                        <input type="radio" checked={formValue.type === 'income'} value="income" name="type" onChange={changeHandler} /> Income
                    </label>
                </div>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
}

export default TransactionForm;