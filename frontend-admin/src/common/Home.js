import React from 'react'

import Login from './Login'

class Home extends React.Component {
    render(){
        return(
            <div>
                {sessionStorage.getItem('authId') ?
                <h2>{sessionStorage.getItem('authId')} 님 환영합니다.</h2>
                :<Login />
                }
            </div>
        )
    }
}

export default Home