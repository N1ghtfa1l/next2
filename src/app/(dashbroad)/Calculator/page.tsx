'use client'
import { useEffect, useState } from "react";
import style from './Calculator.module.scss'

function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<any>('');

    const handleButtonClick = (value: any) => {
        setInput(input + value);
    };

    const calculatePercentage = () => {
        try {
            const value = eval(input);
            setResult(value / 100);
        } catch {
            setResult('Ошибка');
        }
    };

    const calculate = () => {
        try {
            setResult(eval(input));
        } catch {
            setResult('Ошибка');
        }
    };

    const clearInput = () => {
        setInput('');
        setResult('');
    };
    const handleKeyPress = (event: KeyboardEvent) => {
        const key = event.key;

        if (/[0-9]/.test(key)) {
            setInput((prev) => prev + key);
        } else if (['+', '-', '*', '/'].includes(key)) {
            setInput((prev) => prev + key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            setInput((prev) => prev.slice(0, -1));
        } else if (key === '.') {
            setInput((prev) => prev + '.');
        } else if (key === '%') {
            calculatePercentage();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [input]);

    return (
        <div className={style.container}>
            <div className={style.description}>
                <h1>Калькулятор</h1>
                <div>Очень Простой калькулятор обычный - только стандартные функции калькулятора: сложение, вычитание, умножение и деление. Простой калькулятор работает на смартфонах и ПК даже без интернета, не требует установки, быстро загружается и работает онлайн.</div>
            </div>
            <div className={style.calculator}>
                <div className={style.display}>
                    <div className={style.result}>{result}</div>
                    <div className={style.input}>{input}</div>
                </div>
                <div className={style.button}>
                    <button className={style.buttonInterface} onClick={clearInput}>C</button>
                    <button className={style.buttonInterface} onClick={() => handleButtonClick('+/-')}>+/-</button>
                    <button className={style.buttonInterface} onClick={calculatePercentage}>%</button>
                    <button className={style.buttonLogicInterface} onClick={() => handleButtonClick('/')}>÷</button>

                    <button className={style.buttonInterface} onClick={() => handleButtonClick('7')}>7</button>
                    <button className={style.buttonInterface} onClick={() => handleButtonClick('8')}>8</button>
                    <button className={style.buttonInterface} onClick={() => handleButtonClick('9')}>9</button>
                    <button className={style.buttonLogicInterface} onClick={() => handleButtonClick('*')}>×</button>

                    <button className={style.buttonInterface} onClick={() => handleButtonClick('4')}>4</button>
                    <button className={style.buttonInterface} onClick={() => handleButtonClick('5')}>5</button>
                    <button className={style.buttonInterface} onClick={() => handleButtonClick('6')}>6</button>
                    <button className={style.buttonLogicInterface} onClick={() => handleButtonClick('-')}>-</button>

                    <button className={style.buttonInterface} onClick={() => handleButtonClick('1')}>1</button>
                    <button className={style.buttonInterface} onClick={() => handleButtonClick('2')}>2</button>
                    <button className={style.buttonInterface} onClick={() => handleButtonClick('3')}>3</button>
                    <button className={style.buttonLogicInterface} onClick={() => handleButtonClick('+')}>+</button>

                    <button className={`${style.buttonInterface} ${style['button-0']}`} onClick={() => handleButtonClick('0')}>0</button>
                    <button className={style.buttonInterface} onClick={() => handleButtonClick('.')}>.</button>
                    <button className={style.buttonLogicInterface} onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    );
}

export default App;
