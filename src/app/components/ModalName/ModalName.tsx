'use client'
import React, { useState } from 'react';
import style from './ModalName.module.scss'
import Link from 'next/link';
import useStore from '@/app/store/store';


const ModalName = () => {
    const [inputValue, setInputValue] = useState<string>('')
    const { setMessage } = useStore()

    const saveName = () => {
        setMessage(inputValue)
        if (inputValue) localStorage.setItem('message', inputValue)
    }
    return (
        <div className={style.box}>
            <div className={style.modalTop}>
                <div className={style.title}>Начать</div>
                <div className={style.name}>Ваше имя</div>
                <input className={style.inputStyle} value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='Как вас зовут?' />
            </div>
            <div className={style.modalBot}>
                <Link href={'/Calculator'}>  <button onClick={saveName} disabled={inputValue || localStorage.getItem('message') ? false : true} className={style.button}>Открыть калькулятор</button></Link>
                <Link href={'/Password'}>  <button onClick={saveName} disabled={inputValue || localStorage.getItem('message') ? false : true} className={style.button}>Открыть генератор</button></Link>
            </div>
        </div>
    );
};

export default ModalName;