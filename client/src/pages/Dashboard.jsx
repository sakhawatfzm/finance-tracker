import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import api from "../services/api";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SummaryCards from "../components/SummaryCards";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import TransactionFilters from "../components/TransactionFilters";
import FinanceChart from "../components/FinanceChart";
import DeleteModal from "../components/DeleteModal";
import Loader from "../components/Loader";

import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  // Transactions
  const [transactions, setTransactions] = useState([]);

  // Loading
  const [loading, setLoading] = useState(true);

  // Submit loading
  const [submitting, setSubmitting] = useState(false);

  // Search & Filter
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Delete Modal
  const [showModal, setShowModal] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState(null);

  // Summary
  const [summary, setSummary] = useState({ balance: 0, income: 0, expense: 0 });

  // Form data
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
  });

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out");
    navigate("/");
  };

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fetch transactions
  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await api.get("/transactions");
      const data = response.data.transactions;
      setTransactions(data);

      let income = 0;
      let expense = 0;
      data.forEach((item) => {
        if (item.type === "income") {
          income += item.amount;
        } else {
          expense += item.amount;
        }
      });
      setSummary({ balance: income - expense, income, expense });
    } catch (error) {
      console.error(error);
      toast.error("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  // Create transaction
  const createTransaction = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await api.post("/transactions", formData);
      toast.success("Transaction added");
      setFormData({ title: "", amount: "", type: "expense", category: "" });
      fetchTransactions();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add transaction");
    } finally {
      setSubmitting(false);
    }
  };

  // Open delete modal
  const openDeleteModal = (id) => {
    setSelectedTransactionId(id);
    setShowModal(true);
  };

  // Delete transaction
  const deleteTransaction = async () => {
    try {
      await api.delete(`/transactions/${selectedTransactionId}`);
      toast.success("Transaction deleted");
      fetchTransactions();
      setShowModal(false);
      setSelectedTransactionId(null);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete transaction");
    }
  };

  // Initial load
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Filtered transactions
  const filteredTransactions = transactions.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" ? true : item.type === filterType;
    return matchesSearch && matchesType;
  });

  // Loading UI
  if (loading) return <Loader />;

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      {/* Navbar */}
      <Navbar user={user} handleLogout={handleLogout} />

      <div className="page-shell">
        {/* Hero */}
        <HeroSection />

        {/* Summary Cards */}
        <SummaryCards summary={summary} />

        {/* Two-column: Form + Chart */}
        <div className="main-grid">
          <TransactionForm
            formData={formData}
            handleChange={handleChange}
            createTransaction={createTransaction}
            submitting={submitting}
          />
          <FinanceChart summary={summary} />
        </div>

        {/* Filters */}
        <TransactionFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
        />

        {/* Transaction List */}
        <TransactionList
          transactions={filteredTransactions}
          openDeleteModal={openDeleteModal}
        />
      </div>

      {/* Delete Modal */}
      <DeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default Dashboard;