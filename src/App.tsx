import React, { useState } from 'react';
import './App.css';
import { LeftColumn, RightColumn } from './components';

export enum Select {
  subscribed="Subscribed",
  notSubscribed="Not Subscribed",
  other="Other"
}

interface FormData {
  name?: string,
  setNameFunc: (value: string) => void,
  select: Select, 
  setSelectFunc: (value: Select) => void,
  number?: number,
  setNumberFunc: (value: number) => void,
  employed?: boolean,
  setEmployedFunc: (value: boolean) => void,
  setPersonsFunc: (value: Persons) => void,
  deletePersonsFunc: (value: number) => void,
  deletedPersonIndex: number
}

export interface Persons {
  name?: string,
  select?: Select,
  number?: number,
  employed?: boolean
}

interface localPersons {
  persons: Array<Persons>,
  setDeletedPersonFunc: (value: number) => void
}

const defaultState = {
  setNameFunc: () => 0,
  select: Select.subscribed,
  setSelectFunc: () => 0,
  setNumberFunc: () => 0,
  setEmployedFunc: () => 0,
  setPersonsFunc: () => 0,
  deletePersonsFunc: () => 0,
  deletedPersonIndex: 0
}

const defaultStatePersons = {
  persons: [
    {
      name: '',
      select: Select.subscribed,
      number: 0,
      employed: true
    }
  ],
  setDeletedPersonFunc: () => 0
}


export const Context = React.createContext<FormData>(defaultState)

export const ContextPersons = React.createContext<localPersons>(defaultStatePersons)


function App() {
  
  const [name, setName] = useState('')
  const [select, setSelect] = useState(Select.subscribed)
  const [number, setNumber] = useState(0)
  const [employed, setEmployed] = useState(true)
  const [deletedPersonIndex, setDeletedPersonIndex] = useState(0)

  let localStoragePersons = localStorage.getItem('persons')
  const [persons, setPersons] = useState(localStoragePersons ? JSON.parse(localStoragePersons) as Array<Persons> : [] as Array<Persons>)

  const setNameFunc = (value: string) => {
    setName(value)
  }
  const setSelectFunc = (value: Select) => {
    setSelect(value)
  }
  const setNumberFunc = (value: number) => {
    setNumber(value)
  }
  const setEmployedFunc = (value: boolean) => {
    setEmployed(value)
  }
  const setPersonsFunc = (value: Persons) => {
    localStoragePersons = localStorage.getItem('persons')
    const personsArray = localStoragePersons ? JSON.parse(localStoragePersons) : []
    personsArray.push(value)
    const personsStringify = JSON.stringify(personsArray)
    localStorage.setItem('persons', personsStringify)
    setPersons(personsArray)
  }

  const setDeletedPersonFunc = (index: number) => {
    setDeletedPersonIndex(index)
  }

  const deletePersonsFunc = (deletedPersonIndex: number) => {
    localStoragePersons = localStorage.getItem('persons')
    const personsArray = localStoragePersons ? JSON.parse(localStoragePersons) : []
    personsArray.splice(deletedPersonIndex, 1)
    const personsStringify = JSON.stringify(personsArray)
    localStorage.setItem('persons', personsStringify)
    setPersons(personsArray)
  }

  return (
      <div className="body">
        <Context.Provider value={{
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
        }}>
          <LeftColumn />
        </Context.Provider>
        <ContextPersons.Provider value={{
          persons,
          setDeletedPersonFunc
        }}>
          <RightColumn />
        </ContextPersons.Provider>
      </div>
    
  );
}

export default App;
