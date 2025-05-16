import { useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
    const [result, setResult] = useState(0);
    const [input, setInput] = useState("");

    const handleClick = (e) => {
        console.log(typeof(e))
        setInput((prev) => prev + e);
        console.log(e)
    };
    const handleClear = () => {
        setInput("");
        setResult(0);
    };

    const handleResult = () => {
        try {
        const result = Function(`return ${input}`)();
        //console.log("result:",result)
            setResult(result.toString());
        } catch (error) {
            console.log(error)
            setInput("Error");
        }
    };
    return(
        <div className={styles.countainer}>
            <div className={styles.heading}><h1>React Calculator</h1></div>
            <div className={styles.input}><input type="text" readOnly value={input}/><div className={styles.output}>{result}</div></div>
            
            <div className={styles.gridcont}>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>7</button>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>8</button>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>9</button>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>+</button>
                        
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>4</button>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>5</button>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>6</button>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>-</button>

            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>1</button>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>2</button>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>3</button>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>*</button>
            
            <button className={styles.griditem} onClick={handleClear}>C</button>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>0</button>
            <button className={styles.griditem}
                onClick={handleResult}
            >=</button>
            <button className={styles.griditem} onClick={(e) => handleClick(e.target.textContent)}>/</button>

            </div>



        </div>
    );
}
export default Calculator;