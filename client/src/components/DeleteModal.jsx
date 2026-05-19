function DeleteModal({ showModal, setShowModal, deleteTransaction }) {
  if (!showModal) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-box">

        <div className="modal-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8576a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          </svg>
        </div>

        <h2 className="modal-title">Delete Transaction</h2>
        <p className="modal-body">
          This action cannot be undone. Are you sure you want to permanently delete this transaction?
        </p>

        <div className="modal-actions">
          <button
            onClick={() => setShowModal(false)}
            className="btn-modal-cancel"
          >
            Cancel
          </button>
          <button
            onClick={deleteTransaction}
            className="btn-modal-delete"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default DeleteModal;