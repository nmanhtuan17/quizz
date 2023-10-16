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
            question: "Phương tiện nào được ưu tiên khi điều khiển trên đường có biển báo đường ưu tiên?",
            correct_answer: "Phương tiện được biển báo ưu tiên",
            all_answers: [
                "Phương tiện chạy trên đường sắt",
                "Phương tiện đang có tín hiệu ưu tiên",
                "Phương tiện đi từ bên phải của bạn",
                "Phương tiện được biển báo ưu tiên"
            ]
        },
        {
            id: 3,
            question: "Biển báo hết đoạn đường ưu tiên đặc biệt có hình dạng như thế nào?",
            correct_answer: "Hình tam giác đặc biệt màu vàng",
            all_answers: [
                "Hình vuông màu xanh",
                "Hình tròn màu đỏ",
                "Hình tam giác đặc biệt màu vàng"
            ]
        },
        {
            id: 4,
            question: "Khi gặp biển báo cấm rẽ trái, người lái xe phải làm gì?",
            correct_answer: "Không được rẽ trái",
            all_answers: [
                "Rẽ trái nếu đảm bảo an toàn",
                "Rẽ trái theo ý muốn",
                "Rẽ trái khi có người hướng dẫn giao thông",
                "Không được rẽ trái"
            ]
        },
        {
            id: 5,
            question: "Khi muốn dừng xe tại vạch dừng xe đường bộ, bạn phải làm gì?",
            correct_answer: "Dừng xe đối với tất cả các phương tiện đến sau",
            all_answers: [
                "Dừng xe đối với xe công an",
                "Dừng xe đối với xe ưu tiên",
                "Dừng xe đối với tất cả các phương tiện đến sau"
            ]
        }
    ],
    topics: [
        {
            id: 1,
            status: false,
            all_questions: [
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
                    question: "Phương tiện nào được ưu tiên khi điều khiển trên đường có biển báo đường ưu tiên?",
                    correct_answer: "Phương tiện được biển báo ưu tiên",
                    all_answers: [
                        "Phương tiện chạy trên đường sắt",
                        "Phương tiện đang có tín hiệu ưu tiên",
                        "Phương tiện đi từ bên phải của bạn",
                        "Phương tiện được biển báo ưu tiên"
                    ]
                },
                {
                    id: 3,
                    question: "Biển báo hết đoạn đường ưu tiên đặc biệt có hình dạng như thế nào?",
                    correct_answer: "Hình tam giác đặc biệt màu vàng",
                    all_answers: [
                        "Hình vuông màu xanh",
                        "Hình tròn màu đỏ",
                        "Hình tam giác đặc biệt màu vàng"
                    ]
                },
                {
                    id: 4,
                    question: "Khi gặp biển báo cấm rẽ trái, người lái xe phải làm gì?",
                    correct_answer: "Không được rẽ trái",
                    all_answers: [
                        "Rẽ trái nếu đảm bảo an toàn",
                        "Rẽ trái theo ý muốn",
                        "Rẽ trái khi có người hướng dẫn giao thông",
                        "Không được rẽ trái"
                    ]
                },
                {
                    id: 5,
                    question: "Khi muốn dừng xe tại vạch dừng xe đường bộ, bạn phải làm gì?",
                    correct_answer: "Dừng xe đối với tất cả các phương tiện đến sau",
                    all_answers: [
                        "Dừng xe đối với xe công an",
                        "Dừng xe đối với xe ưu tiên",
                        "Dừng xe đối với tất cả các phương tiện đến sau"
                    ]
                }
            ]
        },
        {
            id: 2,
            status: false,
            all_questions: [
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
                    question: "Phương tiện nào được ưu tiên khi điều khiển trên đường có biển báo đường ưu tiên?",
                    correct_answer: "Phương tiện được biển báo ưu tiên",
                    all_answers: [
                        "Phương tiện chạy trên đường sắt",
                        "Phương tiện đang có tín hiệu ưu tiên",
                        "Phương tiện đi từ bên phải của bạn",
                        "Phương tiện được biển báo ưu tiên"
                    ]
                },
                {
                    id: 3,
                    question: "Biển báo hết đoạn đường ưu tiên đặc biệt có hình dạng như thế nào?",
                    correct_answer: "Hình tam giác đặc biệt màu vàng",
                    all_answers: [
                        "Hình vuông màu xanh",
                        "Hình tròn màu đỏ",
                        "Hình tam giác đặc biệt màu vàng"
                    ]
                },
                {
                    id: 4,
                    question: "Khi gặp biển báo cấm rẽ trái, người lái xe phải làm gì?",
                    correct_answer: "Không được rẽ trái",
                    all_answers: [
                        "Rẽ trái nếu đảm bảo an toàn",
                        "Rẽ trái theo ý muốn",
                        "Rẽ trái khi có người hướng dẫn giao thông",
                        "Không được rẽ trái"
                    ]
                },
                {
                    id: 5,
                    question: "Khi muốn dừng xe tại vạch dừng xe đường bộ, bạn phải làm gì?",
                    correct_answer: "Dừng xe đối với tất cả các phương tiện đến sau",
                    all_answers: [
                        "Dừng xe đối với xe công an",
                        "Dừng xe đối với xe ưu tiên",
                        "Dừng xe đối với tất cả các phương tiện đến sau"
                    ]
                },
                {
                    id: 6,
                    question: "Khi muốn dừng xe tại vạch dừng xe đường bộ, bạn phải làm gì?",
                    correct_answer: "Dừng xe đối với tất cả các phương tiện đến sau",
                    all_answers: [
                        "Dừng xe đối với xe công an",
                        "Dừng xe đối với xe ưu tiên",
                        "Dừng xe đối với tất cả các phương tiện đến sau"
                    ]
                }
            ]
        },
    ],


    questions_after: [],
    user_answers_true: 0,
    user_wrong_answers: 0,
    point: 0
    


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
            let questionFind = state.topics[Number(action.payload.topic)].all_questions.find((item) => item.id === Number(action.payload.id))
            let newQuestion = { ...questionFind, user_answer: action.payload.user_answer }
            return {
                ...state,
                questions_after: [...state.questions_after, newQuestion]
            }
        case 'COUNT_TRUE':
            return {
                ...state,
                user_answers_true: state.user_answers_true + 1,
                point: state.point + 1
            }
        case 'COUNT_FALSE':
            return {
                ...state,
                user_wrong_answers: state.user_wrong_answers + 1
            }
        case 'FINISH': {
            return {
                ...state,
                user_answers_true: 0,
                user_wrong_answers: 0
            }
        }
        case 'SET_STATUS':
            // const topic = state.topics[action.topic]
            let newTopics = state.topics.map((topic, index) => {
                if (index === Number(action.topic)) {
                    topic.status = true
                }
                return topic
            })
            return {
                ...state,
                topics: newTopics
            }
        default:
            return state
    }
}

export {
    rootReducer,
    rootStore
}