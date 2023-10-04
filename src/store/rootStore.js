const rootStore = {
    userLogin: false,
    userData: {},
    allUser: [
        {
            email: 'abc@gmail.com',
            username: 'abc',
            password: '1'
        }
    ],
    questions: [
        {
            id: 1,
            question: "Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?",
            correct_answer: "Phần đường xe chạy",
            all_answers: [
                "Phần mặt đường và lề đường",
                "Phần đường xe chạy",
                "Phần đường xe cơ giới",
            ]
        },
        {
            id: 2,
            question: "Which UK country features a dragon on their flag?",
            correct_answer: "Wales",
            all_answers: [
                "Stanley Kubrick",
                "James Cameron",
                "Tim Burton",
                "Steven Spielberg"
            ]
        },
    ],

    user_answers_true: [],
    user_wrong_answers: []

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
        case 'TOTAL_ANSWER':
            return {
                ...state,
                user_answers_true: [...state.user_answers_true, action.userAnswer]
            }
        case 'TOTAL_WRONG_ANSWER':
            return {
                ...state,
                user_wrong_answers: [...state.user_wrong_answers, action.wrongAnswer]
            }
        default:
            return state
    }
}

export {
    rootReducer,
    rootStore
}