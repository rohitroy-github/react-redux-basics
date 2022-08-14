import React from "react";

import { useDispatch } from "react-redux/es/exports";

//For binding actionsCreators with dispath
import { bindActionCreators } from "redux";

//Importing actionCreators where reducers are created
import { actionCreators } from "../state/index";

//Used for reading the state.values
import { useSelector } from "react-redux";

import "./Shop.css";

const Shop = () => {
  //useDispatch > a Hook used to alter state
  const dispatch = useDispatch();

  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  // Displaying the uodated balance
  const balance = useSelector((state) => state.amount);

  return (
    <div className="main-container container">
      <div className="heading">
        <h3 className="big-heading">React-Redux Application</h3>
        <h4 className="small-heading">
          Basic Bank Account Balance Updation Application Using Redux Store
        </h4>
      </div>

      <div className="update-container">
        {/* <h3>Calculation Checks</h3> */}
        <button
          type="button"
          className="button-inc btn btn-primary"
          onClick={() => {
            depositMoney(100);
          }}
        >
          <h4>Deposit Money</h4>
        </button>

        <button
          type="button"
          className="button-dec btn btn-primary"

          onClick={() => {

            //Check for 0 account balance !
            if(balance <= 0){ 
              alert('No more withdrawing possible, account balance is 0 !');
            }
            else{ 
              withdrawMoney(100);
            }
          }}
        >
          <h4>Withdraw Money</h4>
        </button>

        {/* <div class="amount-field input-group input-group-lg">
          <input
            type="number"
            class="form-control"
            placeholder="Enter Amount"
            aria-label="Enter Amount"
            aria-describedby="basic-addon1"
            value={amountToUpdate}
          />
        </div> */}
      </div>

      <div className="balance-container">
        <h4 className="balance-text">Updated Account Balance</h4>
        <button type="button" className="button-updt btn btn-dark active">
          <h4>{balance}</h4>
        </button>
      </div>
    </div>
  );
};

export default Shop;
