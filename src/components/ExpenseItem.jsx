import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import './Expenses.css'

const ExpenseItem = (props) => {

    return (
        <div className='expenses'>
            <div className='expense-item'>
                <ExpenseDate date={props.data.date}/>
                <div className='expense-item__description'>
                    <h2>{props.data.title}</h2>
                    <div className='expense-item__price'>{props.data.price}</div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem