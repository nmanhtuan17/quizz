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
            ],
        },
        {
            id: 2,
            question: "Which UK country features a dragon on their flag?",
            correct_answer: "Stanley Kubrick",
            all_answers: [
                "Stanley Kubrick",
                "James Cameron",
                "Tim Burton",
                "Steven Spielberg"
            ]
        },
    ],
    questions_after: [],
    user_answers_true: 0,
    user_wrong_answers: 0



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
        case 'SET_ANSWER':
            let questionFind = state.questions.find((item) => item.id === Number(action.payload.id))
            let newQuestion = { ...questionFind, user_answer: action.payload.user_answer }
            return {
                ...state,
                questions_after: [...state.questions_after, newQuestion]
            }
        case 'COUNT_TRUE':
            return {
                ...state,
                user_answers_true: state.user_answers_true + 1
            }
        case 'COUNT_FALSE':
            return {
                ...state,
                user_wrong_answers: state.user_wrong_answers + 1
            }
        default:
            return state
    }
}

export {
    rootReducer,
    rootStore
}