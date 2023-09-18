import { useContext } from 'react'
import classes from './style.module.scss'
import { ContextPersons } from '../../App'
import { Persons } from '../../App'

export const RightColumn: React.FC = () => {

    const {persons, setDeletedPersonFunc} = useContext(ContextPersons)

    return (
        <div className={classes['table']}>
            <div className={classes['table__top']}>
                <p>Name</p>
                <p>Age</p>
                <p>Subscription</p>
                <p>Employment</p>
            </div>
            
            {   
                persons.map((person: Persons, index: number) => {
                    return (
                        <a href="#" className={classes['table__item']} key={index} onClick={() => setDeletedPersonFunc(index)}>
                            <li>{person.name}</li>
                            <li>{person.number}</li>
                            <li>{person.select}</li>
                            <li>{person.employed ? 'Employed' : 'Unemployed'}</li>
                        </a>
                    )
                })
            }
            
        </div>
    )
}