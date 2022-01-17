import React from "react"

const UsersList = ({users, selectUser, deleteUser}) => {
    return(
        <section className="Users-section">
            {
                users.map(user => 
                <div className="User-container" key={user.id}>
                    <div className="User-info">
                        <h3>{user.first_name} {user.last_name}</h3>
                        <p>{user.email}</p>
                        <b><i className="fas fa-birthday-cake"></i>{user.birthday}</b>
                    </div>
                    <div className="User-options">
                        <button 
                            className="Edit" 
                            onClick={() => selectUser(user)}
                        >
                            <i className="fas fa-user-edit"></i>
                        </button>
                        <button 
                            className="Delite"
                            onClick={() => deleteUser(user.id)}
                        >
                            <i className="fas fa-user-times"></i>
                        </button>
                    </div>
                </div>)
            }
        </section>
    )
}

export default UsersList;