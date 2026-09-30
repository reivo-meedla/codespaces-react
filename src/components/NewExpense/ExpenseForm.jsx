import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor='title'>Title</label>
                        <input id='title' type='text' 
                        onChange={titleChangeHandler} 
                        value={enteredTitle} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='amount'>Amount</label>
                    <input id='amount' type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor='date'>Date</label>
                    <input id='date' type='date' min='2024-01-01' max='2024-12-31' onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
                <button type='button' className='new-expense__button' onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    )
}

export default ExpenseForm