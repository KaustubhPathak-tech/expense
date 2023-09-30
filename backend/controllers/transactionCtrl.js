const moment = require("moment");
const transactionModels = require("../models/transactionModel");
// const moment=require("moment");
// import moment from "moment";

const getAllTransaction = async (req, res) => {
  try {
    const { userid, frequency, selectedDate, type } = req.body;
    const query = { userid };

    const transactions = await transactionModels.find({
      ...(frequency !== "custom"
        ? {
            
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      userid: req.body.userid,
      ...(type !== "all" && { type }),
    });
    console.log("transactions", transactions);



    

    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addTransaction = async (req, res) => {
  try {
    const newTransaction = new transactionModels(req.body);
    await newTransaction.save();
    res.status(201).send("transaction created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
module.exports = { getAllTransaction, addTransaction };
