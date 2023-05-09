const Transaction = ({ description, amount,type }) => {
    return (
        <div className="d-flex justify-content-between align-item-center">
            <span class="flex-grow-1 text-left">{description}</span>
            <span class="flex-grow-1 text-left">{amount}</span>
            <span class="flex-grow-1 text-left">{type}</span>
        </div>
    );
}

export default Transaction;