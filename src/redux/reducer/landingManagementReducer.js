import { RESET_GLOBAL_STATE, GET_TEXT_LINE, DELETE_CATEGORY, ADD_ACHIEVEMENT, GET_ACHIEVEMENT, ADD_SERVICE, GET_SERVICE, ADD_TEXT_LINE, GET_ABOUT_US, GET_WHY_CHOOSE_US, GET_SUB_CATEGORY, ADD_WHY_CHOOSE_US, ADD_ABOUT_US, UPDATE_CATEGORY, UPDATE_TEXT_LINE, DELETE_TEXT_LINE, DELETE_SUB_CATEGORY } from '../type';

const initialState = {
    getTextLine: [],
    getService: [],
    addWhyChooseUs: [],
    addAboutUs: [],
    updateCategory: [],
    updateTextLine: [],
    deleteTextLine: null,
    deleteSubCategory: [],
    getAchevement: [],
    addTextLine: [],
    getAboutUs: [],
    getWhyChooseUs: [],
    deleteCategory: null,
    addService: [],
    addAchievement: [],
};


const landingManagementReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TEXT_LINE: 
        return {
            ...state,
            getTextLine: action.payload,
        };
        case GET_SUB_CATEGORY: 
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
        case UPDATE_CATEGORY: 
        return {
            ...state,
            getAllCategory: state.getAllCategory.map((category) =>
                category._id === action.payload.categoryId
                  ? { ...category, name: action.payload.name }
                  : category
              ),
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
        case DELETE_SUB_CATEGORY:
            return {
                ...state,
                deleteSubCategory: action.payload,
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
        case DELETE_CATEGORY:
            return {
                ...state,
                getAllCategory: state.getAllCategory.filter(
                    (category) => category._id !== action.payload
                ),  
            };
        case ADD_SERVICE:
            return {
                ...state,
                addService: action.payload,
            };
        case GET_SERVICE:
            return {
                ...state,
                getService: action.payload,
            };
        case ADD_ACHIEVEMENT:
            return {
                ...state,
                addAchievement: action.payload,
            };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
};

export default landingManagementReducer;