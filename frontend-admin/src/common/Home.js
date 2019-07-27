import React from 'react'

import Login from './Login'

class Home extends React.Component {
    render(){
        return(
            <div>
                {localStorage.getItem('authId') ?
                <h2>{localStorage.getItem('authId')} 님 환영합니다.</h2>
                :<Login />
                }
            </div>
        )
    }
}

export default Home