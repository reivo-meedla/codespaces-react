import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter.jsx'
import Card from '../UI/Card.jsx'
import './Expenses.css'

const Expenses = (props) => {
	const [selectedYear, setSelectedYear] = useState('2023')

	const yearChangeHandler = (year) => {
		setSelectedYear(year)
		console.log('Expenses.jsx year: ', year)
	}
	
	return (
		<Card className='expenses'>
			<ExpensesFilter selectedYear={selectedYear} onYearChange={yearChangeHandler} />
			{props.expenses.map((expense) => (
				<ExpenseItem key={expense.id} data={expense} />
			))}
		</Card>
	)
}

export default Expenses
