import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter.jsx'
import ExpensesList from './ExpensesList.jsx'
import Card from '../UI/Card.jsx'
import './Expenses.css'

const Expenses = (props) => {
	const [selectedYear, setSelectedYear] = useState('2023')

	const yearChangeHandler = (year) => {
		setSelectedYear(year)
		console.log('Expenses.jsx year: ', year)
	}
	const filteredExpenses = props.expenses.filter(
		(expense) => expense.date.getFullYear().toString() === selectedYear
	)

	const expensesContent = filteredExpenses.length === 0 ? (
		<p>No expenses found for the selected year.</p>
	) : (
		filteredExpenses.map((expense) => (
			<ExpenseItem key={expense.id} data={expense} />
		))
	)

	return (
		<Card className='expenses'>
			<ExpensesFilter selectedYear={selectedYear} onYearChange={yearChangeHandler} />
			{expensesContent}
		    <ExpensesList items={filteredExpenses} />
		</Card>
	)
}

export default Expenses