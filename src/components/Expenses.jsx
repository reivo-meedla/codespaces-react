import ExpenseItem from './ExpenseItem'
import Card from './Card'
import './Expenses.css'

const Expenses = (props) => {
	return (
		<Card className='expenses'>
			<ExpenseItem data={props.Expenses[0]}/>
			<ExpenseItem data={props.Expenses[0]}/>
		</Card>
	)
}

export default Expenses
