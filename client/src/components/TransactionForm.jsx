function TransactionForm({ formData, handleChange, createTransaction, submitting }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <div className="panel-dot" />
        <h2 className="panel-title">Add Transaction</h2>
      </div>

      <form onSubmit={createTransaction} className="form-grid">

        {/* Title */}
        <div className="field">
          <label htmlFor="ft-title">Title</label>
          <input
            id="ft-title"
            type="text"
            name="title"
            placeholder="e.g. Salary, Groceries…"
            value={formData.title}
            onChange={handleChange}
            className="ft-input"
          />
        </div>

        {/* Amount */}
        <div className="field">
          <label htmlFor="ft-amount">Amount</label>
          <input
            id="ft-amount"
            type="number"
            name="amount"
            placeholder="0.00"
            value={formData.amount}
            onChange={handleChange}
            className="ft-input"
          />
        </div>

        {/* Type */}
        <div className="field">
          <label htmlFor="ft-type">Type</label>
          <select
            id="ft-type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="ft-select"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {/* Category */}
        <div className="field">
          <label htmlFor="ft-category">Category</label>
          <input
            id="ft-category"
            type="text"
            name="category"
            placeholder="e.g. Food, Travel…"
            value={formData.category}
            onChange={handleChange}
            className="ft-input"
          />
        </div>

        {/* Submit */}
        <button type="submit" disabled={submitting} className="btn-submit">
          {submitting ? "Adding…" : "Add Transaction"}
        </button>

      </form>
    </div>
  );
}

export default TransactionForm;