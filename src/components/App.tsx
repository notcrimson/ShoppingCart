import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { CashStateType } from "@/types";
import { Navbar } from './Navbar';
import StorePage from './StorePage/StorePage';
export const App = () => {
  // const [count, setCount] = useState<number>(0);
  // const increment = () => setCount(prev => prev + 1);
  const dispatch = useDispatch();
  const cash = useSelector((state: CashStateType) => state.cash);

  const incriment = () => {
    dispatch({ type: "ADD", payload: 5 })
  }
  const decrease = () => {
    dispatch({ type: "REM", payload: 5 })
  }

  return (
    <>
      <Navbar />
      <StorePage />
      {/* <h1>{cash}</h1>
      <div className="app-buttons-box">
        <button onClick={incriment}>inc</button>
        <button onClick={decrease}>dec</button>
      </div> */}
    </>
  )
}