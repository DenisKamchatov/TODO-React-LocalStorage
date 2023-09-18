import { useContext, useEffect, useState } from 'react'
import classes from './style.module.scss'
import { Context, Select } from '../../App'

export const LeftColumn = () => {

    // const localStorageData = localStorage.getItem('test')
    // const [local, setLocal] = useState(localStorageData ? JSON.parse(localStorageData) : [])

    // const submitForm = () => {
    //     const tableItems = JSON.parse(JSON.stringify(local)) 

    //     tableItems.push({
    //         nameOld,
    //         number,
    //         select,
    //         employed,
    //     })

    //     setLocal(tableItems)

    //     localStorage.setItem('test', JSON.stringify(local))
    // }

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
        deletedPersonIndex
    } = useContext(Context)

    // console.log(number)

    return (
        <div className={classes['form']}>

            <input 
                className={classes['form__input-name']} 
                value={name} 
                type='text'
                onChange={(e) => setNameFunc(e.target.value)}
            />
            <input 
                type='number' 
                className={classes['form__input-number']} 
                value={number}
                onChange={(e) => setNumberFunc(Number(e.target.value))}
            />

            <select 
                className={classes['form__input-select']} 
                name="subscribed" 
                id="subscribed"
                value={select}
                onChange={(e) => setSelectFunc(e.target.value as Select)}
            >
                <option value="Subscribed">Subscribed</option>
                <option value="Not Subscribed">Not Subscribed</option>
                <option value="Other">Other</option>
            </select>

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

            {/* <button className={classes['form__button']} onClick={submitForm} type='button'>Insert</button> */}
            <button 
                className={classes['form__button']} 
                type='button'
                onClick={() => setPersonsFunc({
                    name: name,
                    select: select,
                    number: number,
                    employed: employed
                })} 
            >Insert</button>

            <hr className={classes['form__line']} />

            <button className={classes['form__button']} type='button' onClick={() => deletePersonsFunc(deletedPersonIndex)}>Delete</button>

        </div>
    )
}