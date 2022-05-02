const validateBalance = async (amount, balance) => {
  if (amount > balance) {
    return true;
  } else {
    return false;
  }
};

export default validateBalance;
