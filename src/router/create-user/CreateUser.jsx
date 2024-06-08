import React, { useState } from 'react'
import "./CreateUser.css"
import { useDispatch } from 'react-redux'
import { addToUsers } from '../../context/action'

function CreateUser() {
  const [name, setName] = useState("")
  const [profession, setProfession] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    let newUser = {
      id: new Date().getTime(),
      name,
      profession,
      age: +age,
      gender
    }
    dispatch(addToUsers(newUser))
    setName("")
    setProfession("")
    setAge("")
    setGender("")
  }

  return (
    <div className='create__user'>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className='create__user-form' action="">
        <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required/>
        <input type="text" placeholder='profession' value={profession} onChange={(e) => setProfession(e.target.value)} required/>
        <input type="number" placeholder='age' value={age} onChange={(e) => setAge(e.target.value)} required/>
        <select name="" id="" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default CreateUser