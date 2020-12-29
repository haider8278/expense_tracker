import React, {useReducer, createContext} from 'react';
import contextReducer from './contextReducer';
//const initialState = [];
const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) =>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators
    const deleteTransaction = (id) =>{
        dispatch({type: 'DELETE_TRANSACTION', payload: id});
    }

    const addTransaction = (transaction) => {
        dispatch({type: 'ADD_TRANSACTION', payload: transaction});
    }

    const balance = transactions.reduce((acc,transaction) => {
        return (transaction.type === 'Expense' ? acc - transaction.amount : acc + transaction.amount);
    },0);

    return (
        <ExpenseTrackerContext.Provider value={{
            transactions,
            deleteTransaction,
            addTransaction,
            balance
            }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}