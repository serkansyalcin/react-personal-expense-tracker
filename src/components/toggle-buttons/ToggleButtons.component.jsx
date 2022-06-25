import '../../index.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTransactionMode } from '../../features/transactions/transactions.slice'

const ToggleButtons = () => {
    const currentTransactionMode = useSelector(state => state.transactions.currentTransactionMode)
    const dispatch = useDispatch()

    const handleIncomeButton = () => {
        dispatch(toggleTransactionMode())
    }

    const handleExpenseButton = () => {
        dispatch(toggleTransactionMode())
    }

    let dynamicActiveStateStyles = ''
    
    let dynamicIncomeButtonStyles = ''
    let dynamicExpenseButtonStyles = ''

    if(currentTransactionMode === 'expense'){
        dynamicExpenseButtonStyles = 'text-white'
        dynamicIncomeButtonStyles = 'text-black'
        dynamicActiveStateStyles = 'translate-x-[18rem]'
    }

    if(currentTransactionMode === 'income'){
        dynamicExpenseButtonStyles = 'text-black'
        dynamicIncomeButtonStyles = 'text-white'
    }
    
    return (
        <div className="flex justify-between items-center py-8 px-16 bg-indigo-100 
        w-[38rem] rounded-full h-24 text-2xl relative">
            <div 
                className={`toggle-button-styles ${dynamicIncomeButtonStyles}`}
                onClick={handleIncomeButton}
            >
                Income
            </div>
            <div 
                className={`toggle-button-styles ${dynamicExpenseButtonStyles}`}
                onClick={handleExpenseButton}
            >
                Expense
            </div>
            <span className={`active-button-state ${dynamicActiveStateStyles}`}/>
        </div>
    )
}

export default ToggleButtons