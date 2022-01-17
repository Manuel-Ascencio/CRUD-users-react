import axios from "axios"
import React, { useState, useEffect } from "react"

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {

    const [ first_name, setFirst_name ] = useState("")
    const [ last_name, setLast_name ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ birthday, setBirthday ] = useState("")

    useEffect(() => {
        if(userSelected){
            setFirst_name(userSelected.first_name)
            setLast_name(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        }else{
            reset()
        }
    }, [userSelected])

    const submit = e => {
        e.preventDefault();
        const user = {
            first_name,
            last_name,
            email,
            password,
            birthday
        }
        if(userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => getUsers())
        }else{
            axios.post("https://users-crud1.herokuapp.com/users/", user)
            .then(() => getUsers())
        }

    }

    const reset = () => {
        setFirst_name("")
        setLast_name("")
        setEmail("")
        setPassword("")
        setBirthday("")
    }

    return(
        <section className="Form-section">
            <form className="Form-container" onSubmit={submit}>
                <h2 className="Title">Create User</h2>
                <div className="Name">
                    <label htmlFor="first_name">
                        <i className="fas fa-user"></i>
                    </label>
                    <input 
                        type="text" 
                        placeholder="First name" 
                        id="first_name" 
                        value={first_name}
                        onChange={e => setFirst_name(e.target.value)}
                    />
                </div>
                <div className="LastName">
                    <label htmlFor="last_name">
                        {/* <i className="fas fa-user"></i> */}
                    </label>
                    <input 
                        type="text" 
                        placeholder="Last name" 
                        id="last_name" 
                        value={last_name}
                        onChange={e => setLast_name(e.target.value)}
                    />
                </div>
                <div className="Email">
                    <label htmlFor="email">
                        <i className="fas fa-envelope"></i>
                    </label>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        id="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="Password">
                    <label htmlFor="password">
                        <i className="fas fa-lock"></i>
                    </label>
                    <input 
                        type="password" 
                        placeholder="password" 
                        id="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className="Birthday">
                    <label htmlFor="birthday">
                        <i className="fas fa-birthday-cake"></i>
                    </label>
                    <input 
                        type="date" 
                        placeholder="birthday" 
                        id="birthday" 
                        value={birthday}
                        onChange={e => setBirthday(e.target.value)}
                    />
                </div>
                <div className="Button">
                    <button className="Create">Create</button>
                    {userSelected ? <button type="button" className="Deselect" onClick={deselectUser}>Deselect</button> : <div></div>}

                </div>
            </form>
        </section>
    )
}

export default UsersForm;