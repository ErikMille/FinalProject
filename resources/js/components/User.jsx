import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const User = (props) => {
    console.log('tutor',props.tutor)
    console.log('user',props.user)

    const tutor=JSON.parse(props.tutor)
    const user=JSON.parse(props.user)
    return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card" style={{width: '800px',flexDirection:'row'}}>
                        <img className="img-thumbnail mx-auto" style={{width: '200px',height: '200px'}} src="https://pbs.twimg.com/media/DuuVwbWWwAEtrTf.jpg" alt="Card image cap"></img>
                        <div className="card-body">
                            <h5 className="card-title">{user.name}</h5>
                            <p className="card-text">City:{user.email}</p>
                            <p className="card-text">Age:{((new Date().getTime() - new Date(user.updated_at)) / (24 * 3600 * 365.25 * 1000)) | 0} Gender: {user.gender}</p>

                        </div>
                    </div>
                </div>
            </div>
    )
}

export default User


if (document.getElementById('user')) {
    const el =  document.getElementById('user')
    const props = Object.assign({}, el.dataset)
    ReactDOM.render(<User {...props}/>,el);
}
