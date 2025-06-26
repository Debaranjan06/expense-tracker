import React, {createContext, useReducer} from 'react'
import AppReducers from './AppReducers.js';

// Initial state
const initialState = {
    transactions: []
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducers, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    }

    return (
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}