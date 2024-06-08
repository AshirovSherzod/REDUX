import React from 'react'
import "./Users.css"
import male from "../../assets/male-avatar-boy-face-man-user-9.svg"
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg"
import { useDispatch } from 'react-redux'
import { removeFromUsers } from '../../context/action'

function Users({ data }) {
  const dispatch = useDispatch()

  let card = data?.map(el => (
    <div key={el.id} className="users__card">
      <img src={el.gender === "male"? male : female} alt="" />
      <h2>{el.name}</h2>
      <p>{el.profession}</p>
      <p>{el.age} years old</p>
      <button onClick={()=> dispatch(removeFromUsers(el))}>Remove</button>
    </div>
  ))
  return (
    <div className='users__wrapper'>
      {card}
    </div>
  )
}

export default Users