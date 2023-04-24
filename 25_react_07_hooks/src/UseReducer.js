import { useReducer } from 'react'

const reducer = (prevNumber, action) => {
   // prevNumber : 현재 state
   // action : dispatch 에서 인자로 받고있는 현재 액션 값

   switch (action.type) {
      case 'INCREMENT':
         return { value: prevNumber.value + 1 };
      case 'DECREMENT':
         return { value: prevNumber.value - 1 };
      case 'RESET':
         return { value: 7 };
      default:
         return { value: prevNumber.value };
   }
}


const UseReducer = () => {

   const [number, dispatch] = useReducer(reducer, { value: 7 })
   const increment = () => {
      dispatch({ type: 'INCREMENT' })
   }
   const decrement = () => {
      dispatch({ type: 'DECREMENT' })
   }
   const reset = () => {
      dispatch({ type: 'RESET' })
   }

   return (
      <>
         <h1>useReducer hook</h1>
         <h2>{number.value}</h2>

         <button onClick={increment}>PLUS</button>
         <button onClick={decrement}>MINUS</button>
         <button onClick={reset}>RESET</button>
      </>
   )
}

export default UseReducer;