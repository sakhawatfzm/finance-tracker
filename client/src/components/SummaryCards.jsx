function SummaryCards({ summary }) {
  return (
    <div className="summary-grid">

      {/* Balance */}
      <div className="s-card s-card--balance" data-index="01">
        <div className="s-icon s-icon--balance">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </div>
        <span className="s-label s-label--balance">Total Balance</span>
        <p className="s-amount">${summary.balance}</p>
      </div>

      {/* Income */}
      <div className="s-card s-card--income" data-index="02">
        <div className="s-icon s-icon--income">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
          </svg>
        </div>
        <span className="s-label s-label--income">Total Income</span>
        <p className="s-amount">${summary.income}</p>
      </div>

      {/* Expense */}
      <div className="s-card s-card--expense" data-index="03">
        <div className="s-icon s-icon--expense">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
          </svg>
        </div>
        <span className="s-label s-label--expense">Total Expenses</span>
        <p className="s-amount">${summary.expense}</p>
      </div>

    </div>
  );
}

export default SummaryCards;