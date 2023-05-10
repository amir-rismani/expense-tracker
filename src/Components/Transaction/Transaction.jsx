const Transaction = ({ transaction }) => {
    return (
        <div className="d-flex justify-content-between align-item-center mb-0.5 px-0.5">
            <span className="text-left flex-basis-1/3 font-large">{transaction.description}</span>
            <span className="text-center flex-basis-1/3 font-large">${transaction.amount}</span>
            <span className={`text-center flex-basis-1/3 font-large ${transaction.type === 'income' ? 'text-success' : 'text-danger'}`}>{transaction.type}</span>
        </div>
    );
}

export default Transaction;