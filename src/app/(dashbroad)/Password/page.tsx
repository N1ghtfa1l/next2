'use client'
import React, { useState } from 'react';
import style from './Password.module.scss'

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [useUppercase, setUseUppercase] = useState(false);
    const [useLowercase, setUseLowercase] = useState(false);
    const [useNumbers, setUseNumbers] = useState(false);
    const [useSymbols, setUseSymbols] = useState(false);
    const [useUnique, setUseUnique] = useState(false);
    const [password, setPassword] = useState<any>([]);

    const handleGeneratePassword = () => {
        const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

        let characters = '';
        if (useUppercase) characters += upperCaseLetters;
        if (useLowercase) characters += lowerCaseLetters;
        if (useNumbers) characters += numbers;
        if (useSymbols) characters += symbols;

        if (characters.length === 0) {
            alert("Выберите хотя бы один тип символов!");
            return;
        }

        let generatedPassword = '';
        const uniqueChars = new Set();

        while (generatedPassword.length < length) {
            const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));

            if (useUnique) {
                if (!uniqueChars.has(randomChar)) {
                    uniqueChars.add(randomChar);
                    generatedPassword += randomChar;
                }
            } else {
                generatedPassword += randomChar;
            }
        }

        setPassword([...password, generatedPassword]);
    };

    return (
        <div className={style.container}>
            <h2>Генератор паролей</h2>
            <div className={style.containerInner}>
                <div className={style.passwordLeft}>
                    <div className={style.box}>
                        <label className={style.label}>
                            Длина пароля:
                            <input
                                className={style.input}
                                type="number"
                                value={length}
                                placeholder='Введите число'
                                onChange={(e) => setLength(Number(e.target.value))}
                                min="1"
                            />
                        </label>
                        <div className={style.passwordCheckboxes}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={useUppercase}
                                    onChange={() => setUseUppercase(!useUppercase)}
                                />
                                Использовать заглавные буквы
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={useLowercase}
                                    onChange={() => setUseLowercase(!useLowercase)}
                                />
                                Использовать строчные буквы
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={useNumbers}
                                    onChange={() => setUseNumbers(!useNumbers)}
                                />
                                Использовать цифры
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={useSymbols}
                                    onChange={() => setUseSymbols(!useSymbols)}
                                />
                                Использовать символы
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={useUnique}
                                    onChange={() => setUseUnique(!useUnique)}
                                />
                                Использовать уникальные символы
                            </label>
                        </div>
                        <div className={style.passwordBot}>
                            <button className={style.button} onClick={handleGeneratePassword}>Сгенерировать пароли</button>
                        </div>
                    </div>
                </div>
                <div className={style.box}>
                    <div className={style.boxInner}>
                        <div>Результаты</div>
                        {password.map((el: any) =>
                            <input className={style.input} type="text" value={el} key={el} readOnly />
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PasswordGenerator;