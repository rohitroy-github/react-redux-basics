import React from 'react'; 

import { useDispatch } from 'react-redux/es/exports';

//For binding actionsCreators with dispath
import { bindActionCreators } from 'redux';

//Importing actionCreators where reducers are created
import { actionCreators } from '../state/index'; 

//Used for reading the state.values 
import { useSelector } from "react-redux";

import './Shop.css'; 

const Shop = () => {

  //useDispatch > a Hook used to alter state 
  const dispatch = useDispatch();

  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);

  // Displaying the uodated balance 
  const balance = useSelector (state  => state.amount);

  return (
    <div className='main-container container'> 
      <div className='heading'> 
        <h3>React-Redux Basics</h3>
        <h4 className='small-heading'>Bank Account Balance Updation Application Using State Updation</h4>
      </div>
      <div className='update-container'> 
      {/* <h3>Calculation Checks</h3> */}
        <button type="button" className="button-update btn btn-primary" onClick={() => { 
          depositMoney(100)
        }}><h4>Deposit Money</h4></button>
        
        <button type="button" className="button-dec btn btn-primary" onClick={() => { 
          withdrawMoney(100)
        }}><h4>Withdraw Money</h4></button>
      </div>
      <div className='balance'> 
        <h4>Updated Account Balance</h4>
        <button type="button" className="button-updt btn btn-primary"><h4>{balance}</h4></button>
      </div>
    </div>
  )
};

export default Shop;