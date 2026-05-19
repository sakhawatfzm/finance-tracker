function TransactionList({ transactions, openDeleteModal }) {
  return (
    <div className="tx-panel">

      <div className="tx-panel-header">
        <div className="tx-panel-title">
          <div className="panel-dot" />
          <h2 className="panel-title">Recent Transactions</h2>
        </div>
        <span className="tx-count">{transactions.length}</span>
      </div>

      {transactions.length === 0 ? (

        <div className="tx-empty">
          <div className="tx-empty-icon">◌</div>
          <p>No transactions found.</p>
        </div>

      ) : (

        <div className="tx-list">
          {transactions.map((item) => (

            <div key={item.id} className="tx-item">

              {/* Indicator */}
              <div className={`tx-ind tx-ind--${item.type}`}>
                {item.type === "income" ? "↑" : "↓"}
              </div>

              {/* Info */}
              <div className="tx-info">
                <p className="tx-title">{item.title}</p>
                <p className="tx-cat">{item.category}</p>
              </div>

              {/* Right side */}
              <div className="tx-right">
                <span className={`tx-amount tx-amount--${item.type}`}>
                  {item.type === "income" ? "+" : "−"}${item.amount}
                </span>
                <button
                  onClick={() => openDeleteModal(item.id)}
                  className="btn-delete"
                >
                  Delete
                </button>
              </div>

            </div>
          ))}
        </div>

      )}
    </div>
  );
}

export default TransactionList;