// FolderUtility > actionCreators > Initiate a particular action and send it to the reducer

// 2 actionCreators are made in this snippet

// Function for depositing money
export const depositMoney = (amount) => {
  // Increment the money in the account

  // Return a function which will take dispatch as parameter and call the function
  return (dispatch) => {
    dispatch({
      type: "DEPOSIT", // Type of action call
      payload: amount, // Amount/ Value for the action call (like a parameter)
    });
  };
};

// Function for withdrawing money
export const withdrawMoney = (amount) => {
  // Decrement the money in the account

  // Return a function which will take dispatch as parameter and call the function
  return (dispatch) => {
    dispatch({
      type: "WITHDRAW", // Type of action call
      payload: amount, // Amount/ Value for the action call (like a parameter)
    });
  };
};
