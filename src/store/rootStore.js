const rootStore = {
    userLogin: false,
    userData: {},
    allUser: [
        {
            email: 'abc@gmail.com',
            username: 'abc',
            password: '1'
        }
    ]
}

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                userLogin: true,
                userData: action.user
            }
        case 'REGISTER':
            return {
                ...state,
                allUser: [...state.allUser, action.newUser]
            }
        case 'LOGOUT':
            return {
                ...state,
                userLogin: false,
                userData: {}
            }
        default:
            return state
    }
}

export {
    rootReducer,
    rootStore
}