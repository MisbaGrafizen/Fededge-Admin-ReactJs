import { RESET_GLOBAL_STATE, GET_TEXT_LINE, DELETE_SERVICE, ADD_ACHIEVEMENT, UPDATE_WHY_CHOOSE_US, UPDATE_ACHIEVEMENT, GET_ACHIEVEMENT, DELETE_ACHIEVEMENT,
     ADD_SERVICE, GET_SERVICE, ADD_TEXT_LINE, GET_ABOUT_US, GET_WHY_CHOOSE_US, ADD_WHY_CHOOSE_US, ADD_ABOUT_US, UPDATE_SERVICE, UPDATE_TEXT_LINE, DELETE_TEXT_LINE, DELETE_WHY_CHOOSE_US } from '../type';

const initialState = {
    getTextLine: [],
    getService: [],
    addWhyChooseUs: [],
    addAboutUs: [],
    updateService: [],
    updateTextLine: [],
    deleteTextLine: null,
    deleteWhyChooseUs: [],
    getAchevement: [],
    addTextLine: [],
    getAboutUs: [],
    getWhyChooseUs: [],
    deleteService: null,
    addService: [],
    addAchievement: [],
    updateWhyChooseUs: [],
    updateAchievement: [],
    deleteAchievement: [],
};


const landingManagementReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TEXT_LINE: 
        return {
            ...state,
            getTextLine: action.payload,
        };
        case GET_SERVICE: 
        return {
            ...state,
            getService: action.payload,
        };
        case GET_ACHIEVEMENT: 
         return {
            ...state,
            getAchevement: action.payload,
         };
         case ADD_TEXT_LINE:
            return {
                ...state,
                addTextLine: action.payload,
            };
        case ADD_WHY_CHOOSE_US:
            return {
                ...state,
                getWhyChooseUs: [...state.getWhyChooseUs, action.payload],
                    };
        case ADD_ABOUT_US:
            return {
                ...state,
                addAboutUs: action.payload,
            };
        case UPDATE_SERVICE: 
        return {
            ...state,
            updateService: action.payload,
            };
        case UPDATE_TEXT_LINE: 
        return {
            ...state,
            updateTextLine: action.payload,
        };
        case DELETE_TEXT_LINE:
            return {
                ...state,
                getTextLine: state.getTextLine.filter(
                    (text) => text._id !== action.payload 
                  ),
                  deleteTextLine: null,
            };
        case DELETE_WHY_CHOOSE_US:
            return {
                ...state,
                deleteWhyChooseUs: action.payload,
            };
        case GET_ABOUT_US: 
        return {
            ...state,
            getAboutUs: action.payload,
        };
        case GET_WHY_CHOOSE_US: 
            return {
                ...state,
                getWhyChooseUs: action.payload,
            };
        case DELETE_SERVICE:
            return {
                ...state,
                deleteService: action.payload, 
            };
        case ADD_SERVICE:
            return {
                ...state,
                addService: action.payload,
            };
        case ADD_ACHIEVEMENT:
            return {
                ...state,
                addAchievement: action.payload,
            };
        case UPDATE_WHY_CHOOSE_US: 
        return {
            ...state,
            updateWhyChooseUs: action.payload,
        };
        case UPDATE_ACHIEVEMENT:
            return {
                ...state,
                updateAchievement: action.payload,
            };
        case DELETE_ACHIEVEMENT:
        return {
            ...state,
            deleteAchievement: action.payload,
        };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
};

export default landingManagementReducer;