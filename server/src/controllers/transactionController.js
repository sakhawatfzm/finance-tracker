import prisma from "../config/prisma.js";

export const createTransaction = async (req, res) => {
  try {
    const { title, amount, type, category } = req.body;

    // Validation
    if (!title || !amount || !type || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create transaction
    const transaction = await prisma.transaction.create({
      data: {
        title,
        amount: parseFloat(amount),
        type,
        category,
        userId: req.user.userId,
      },
    });

    res.status(201).json({
      success: true,
      message: "Transaction created",
      transaction,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


export const getTransactions = async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        userId: req.user.userId,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      success: true,
      count: transactions.length,
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

export const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    // Find transaction
    const transaction = await prisma.transaction.findUnique({
      where: {
        id,
      },
    });

    // Transaction not found
    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "Transaction not found",
      });
    }

    // Ownership check
    if (transaction.userId !== req.user.userId) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    // Delete transaction
    await prisma.transaction.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      success: true,
      message: "Transaction deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};