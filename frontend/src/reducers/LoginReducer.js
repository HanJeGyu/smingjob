const LoginReducer = (state={authSeq:null}, action={}) => {
    console.log("LoginReducer", state, action)
    console.log(`authSeq : ${action.authSeq}`)
    //console.log(`authId : ${action.authId}`)
    //console.log(`authType : ${action.authType}`)
    //console.log(`state : ${state.authSeq}`)
    switch(action.type){
        case 'LOGIN':
            console.log(`로그인 진입`)
            state.authSeq = action.authSeq
            //state.authId = action.authId
            //state.authType = action.authType
            return {authSeq: state.authSeq}
        case 'LOGOUT':
            state.authSeq = null
            state.authId = null
            state.authType = null
            return state
        default:
            return state
    }
}

export default LoginReducer