import { useContext, useEffect, useRef, useState } from 'react'
import classes from './style.module.scss'
import { Context, Select } from '../../App'

export const LeftColumn = () => {

    const {
        name, 
        setNameFunc, 
        select, 
        setSelectFunc,
        number,
        setNumberFunc,
        employed,
        setEmployedFunc,
        setPersonsFunc,
        deletePersonsFunc,
        deletedPersonIndex,
        darkMode,
        setDarkModeFunc
    } = useContext(Context)

    const inputNumber: any = useRef(null)
    const selectInput: any = useRef(null)

    const changeNumber = (increase: boolean) => {
        if (inputNumber && inputNumber.current) {
            increase ? (
                setNumberFunc(Number(inputNumber.current.value) + 1)
            ) : (
                setNumberFunc(Number(inputNumber.current.value) - 1)
            )
        }
    }
    // Дописать функциб открытия select
    // const openSelect = () => {
    //     if (selectInput && selectInput.current) {
            
    //     }
    // }

    return (
        <div className={classes['form']}>

            <input 
                className={darkMode ? classes['form__input-name'] : classes['form__input-name--light']}
                value={name} 
                type='text'
                onChange={(e) => setNameFunc(e.target.value)}
                placeholder='Name'
            />
            <div className={classes['form__number-block']}>
                <input 
                    type='number' 
                    className={darkMode ? classes['form__input-number'] : classes['form__input-number--light']} 
                    value={number || 18}
                    onChange={(e) => setNumberFunc(Number(e.target.value))}
                    min={18}
                    placeholder='Age'
                    ref={inputNumber}
                />
                <div 
                    className={classes['form__arrow-down']}
                    style={{
                        backgroundColor: darkMode ? '#616161' : '#cccccc'
                    }}
                    onClick={(e) => changeNumber(false)}
                >
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5984 7.54349L9.1651 2.11016C8.52344 1.46849 7.47344 1.46849 6.83177 2.11016L1.39844 7.54349" stroke={darkMode ? "#f3f3f3" : "#616161"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div 
                    className={classes['form__arrow-up']}
                    style={{
                        backgroundColor: darkMode ? '#616161' : '#cccccc'
                    }}
                    onClick={(e) => changeNumber(true)}
                >
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5984 7.54349L9.1651 2.11016C8.52344 1.46849 7.47344 1.46849 6.83177 2.11016L1.39844 7.54349" stroke={darkMode ? "#f3f3f3" : "#616161"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            
            <div className={darkMode ? classes['select-block'] : classes['select-block--light']}>
                <select 
                    className={classes['select-block__input-select']} 
                    name="subscribed" 
                    id="subscribed"
                    value={select}
                    ref={selectInput}
                    onChange={(e) => setSelectFunc(e.target.value as Select)}
                >
                    <option value="Subscribed">Subscribed</option>
                    <option value="Not Subscribed">Not Subscribed</option>
                    <option value="Other">Other</option>
                </select>
                <div className={classes['select-block__arrow-down']}>
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5984 7.54349L9.1651 2.11016C8.52344 1.46849 7.47344 1.46849 6.83177 2.11016L1.39844 7.54349" stroke={darkMode ? "#f3f3f3" : "#616161"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            

            <div>
                <input 
                    className={classes['form__input-checkbox']} 
                    type="checkbox" 
                    id="employed" 
                    name="employed"
                    checked={employed}
                    onChange={(e) => setEmployedFunc(e.target.checked)}
                />
                <label className={classes['form__input-checkbox-label']} htmlFor="employed">Employed</label>
            </div>

            <button 
                className={classes['form__button']} 
                type='button'
                onClick={() => setPersonsFunc({
                    name: name,
                    select: select,
                    number: number,
                    employed: employed
                })} 
                style={{
                    backgroundColor: darkMode ? '#616161' : '#cccccc',
                    color: darkMode ? '#f3f3f3' : '#313131'
                }}
            >Insert</button>

            <hr className={classes['form__line']} />

            <div className={classes['theme']}>
                <div 
                    className={classes['theme__switch']}
                    onClick={() => setDarkModeFunc(darkMode ? false : true)}

                >
                    {
                        darkMode ? (
                            <div className={classes['theme__switch-dot']}></div>
                        ) : (
                            <div className={classes['theme__switch-dot']} style={{ left: 'auto', right: '4px', backgroundColor: '#ffffff' }}></div>
                        )
                    }
                </div>

                <p className={classes['theme__text']}>Mode</p>
            </div>

            <button 
                className={classes['form__button']} 
                type='button' 
                onClick={() => deletePersonsFunc(deletedPersonIndex)}
                style={{
                    backgroundColor: darkMode ? '#616161' : '#cccccc',
                    color: darkMode ? '#f3f3f3' : '#313131'
                }}
            >Delete</button>

        </div>
    )
}