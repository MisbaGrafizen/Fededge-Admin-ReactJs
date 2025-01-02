import { RESET_GLOBAL_STATE, GET_USERS, GET_CONTACT_US, UPDATE_USER,  LOGIN_ADMIN} from '../type';

const initialState = {
    getAllUsers: [],
    getContactUs: [],
    adminLogin: [],
    updateUser: [],
};


const userManagementReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS: 
        return {
            ...state,
            getAllUsers: action.payload,
        };
        case GET_CONTACT_US:
            return {
                ...state,
                getContactUs: action.payload,
            };
        case LOGIN_ADMIN: 
        return {
            ...state,
            adminLogin: action.payload,
        };
        case UPDATE_USER:
            return {
                ...state,
                updateUser: action.payload,
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
};

export default userManagementReducer;