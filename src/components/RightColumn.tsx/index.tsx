import { useContext } from 'react'
import classes from './style.module.scss'
import { ContextPersons } from '../../App'
import { Persons } from '../../App'

export const RightColumn: React.FC = () => {

    const {persons, setDeletedPersonFunc, darkMode} = useContext(ContextPersons)

    return (
        <div className={classes['table']}>
            <div 
                className={classes['table__top']}
                
            >
                <p
                    style={{
                        backgroundColor: darkMode ? '#595959' : '#cccccc' 
                    }}
                >Name</p>
                <p
                    style={{
                        backgroundColor: darkMode ? '#595959' : '#cccccc' 
                    }}
                >Age</p>
                <p
                    style={{
                        backgroundColor: darkMode ? '#595959' : '#cccccc' 
                    }}
                >Subscription</p>
                <p
                    style={{
                        backgroundColor: darkMode ? '#595959' : '#cccccc' 
                    }}
                >Employment</p>
            </div>
             
            {   
                persons.map((person: Persons, index: number) => {
                    return (
                        <a 
                            href="#" 
                            className={classes['table__item']} 
                            key={index} 
                            onClick={() => setDeletedPersonFunc(index)}
                            style={{
                                color: darkMode ? '#f3f3f3' : '#313131'
                            }}
                        >
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