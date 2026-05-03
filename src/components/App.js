
import React,{Suspense, useState} from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [error, setError] = useState({name:'', address:'', email:'', mobile:''})

  function handleSubmit(e){
    e.preventDefault()

    if(!name.match(/^[a-zA-Z]+$/)){
      setError(prev => ({...prev,name:'Name should contain only letters'}))
    }
    if(!address.match(/^[a-zA-Z0-9]+$/)){
      setError(prev => ({...prev, address:'Address should not contain special characters'}))
    }
    if(!email.includes('@') && !email.endsWith('.com')){
      setError(prev => ({...prev, email:'Email should contain @ and .com'}))
    }
    if(mobile.length > 10){
      setError(prev => ({...prev, mobile:'Mobile number should not be more than 10 characters'}))
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" value={name} onChange={e => setName(e.target.value)} type="text"></input>
          <p className="errorMessage">{error.name}</p>
          <label htmlFor="address">Address</label>
          <input id="address" value={address} onChange={e => setAddress(e.target.value)} type="text"></input>
          <p className="errorMessage">{error.address}</p>
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onChange={e => setEmail(e.target.value)} type="text"></input>
          <p className="errorMessage">{error.email}</p>
          <label htmlFor="mobile">Mobile</label>
          <input id="mobile" value={mobile} onChange={e => setMobile(e.target.value)} type="text"></input>
          <p className="errorMessage">{error.mobile}</p>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App
