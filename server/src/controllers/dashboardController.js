import prisma from "../config/prisma.js";

export const getDashboardData = async (req, res) => {
  try {
    // Get all user transactions
    const transactions = await prisma.transaction.findMany({
      where: {
        userId: req.user.userId,
      },
    });

    // Calculate totals
    const totalIncome = transactions
      .filter((transaction) => transaction.type === "income")
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalExpense = transactions
      .filter((transaction) => transaction.type === "expense")
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const balance = totalIncome - totalExpense;

    res.status(200).json({
      success: true,

      summary: {
        balance,
        totalIncome,
        totalExpense,
        transactionCount: transactions.length,
      },

      transactions,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};