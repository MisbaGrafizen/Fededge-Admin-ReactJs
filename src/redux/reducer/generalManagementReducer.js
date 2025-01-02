import { RESET_GLOBAL_STATE, GET_TEAM, ADD_TEAM, UPDATE_TEAM, DELETE_TEAM,  GET_TAG, ADD_TAG, UPDATE_TAG, DELETE_TAG, GET_BLOG, ADD_BLOG, UPDATE_BLOG, DELETE_BLOG, GET_FAQ, ADD_FAQ, UPDATE_FAQ, DELETE_FAQ, GET_ATTRIBUTE, ADD_ATTRIBUTE, UPDATE_ATTRIBUTE, DELETE_ATTRIBUTE, GET_TESTIMONIAL, ADD_TESTIMONIAL, UPDATE_TESTIMONIAL, DELETE_TESTIMONIAL } from '../type';

const initialState = {
    getTeam: [],
    getTag: [],
    getBlog: [],
    getFaq: [],
    getAttribute: [],
    getTestimonial: [],
    addTeam : [],
    updateTeam: [],
    deleteTeam: [],
    addTag: [],
    updateTag: [],
    deleteTag: [],
    addBlog: [],
    updateBlog: [],
    deleteBlog: [],
    addFaq: [],
    updateFaq: [],
    deleteFaq: [],
    addAttribute: [],
    updateAttribute: [],
    deleteAttribute: [],
    addTestimonial: [],
    updateTestimonial: [],
    deleteTestimonial: []
};

const generalManagementReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TEAM: 
        return {
            ...state,
            getTeam: action.payload,
        };
        case GET_TAG: 
        return {
            ...state,
            getTag: action.payload,
        };
        case GET_BLOG:
            return {
                ...state,
                getBlog: action.payload,
            };
        case GET_FAQ:
            return {
                ...state,
                getFaq: action.payload,
            };
        case GET_ATTRIBUTE: 
        return {
            ...state,
            getAttribute: action.payload,
        };
        case GET_TESTIMONIAL: 
        console.log('action.payload', action.payload)
        return {
            ...state,
            getTestimonial: action.payload,
        };
        case ADD_TEAM: 
        return {
            ...state,
            addTeam: action.payload,
        };
        case ADD_TAG: 
        return {
            ...state,
            addTag: action.payload,
        };
        case ADD_BLOG:
            return {
                ...state,
                addBlog: action.payload,
            };
        case ADD_FAQ:
            return {
                ...state,
                addFaq: action.payload,
            };
        case ADD_ATTRIBUTE: 
        return {
            ...state,
            addAttribute: action.payload,
        };
        case ADD_TESTIMONIAL: 
        console.log('action.payload', action.payload)
        return {
            ...state,
            addTestimonial: action.payload,
        };
        case UPDATE_TEAM: 
        return {
            ...state,
            updateTeam: action.payload,
        };
        case UPDATE_TAG: 
        return {
            ...state,
            updateTag: action.payload,
        };
        case UPDATE_BLOG:
            return {
                ...state,
                updateBlog: action.payload,
            };
        case UPDATE_FAQ:
            return {
                ...state,
                updateFaq: action.payload,
            };
        case UPDATE_ATTRIBUTE: 
        return {
            ...state,
            updateAttribute: action.payload,
        };
        case UPDATE_TESTIMONIAL: 
        return {
            ...state,
            updateTestimonial: action.payload,
        };
        case DELETE_TEAM: 
        return {
            ...state,
            deleteTeam: action.payload,
        };
        case DELETE_TAG: 
        return {
            ...state,
            deleteTag: action.payload,
        };
        case DELETE_BLOG:
            return {
                ...state,
                deleteBlog: action.payload,
            };
        case DELETE_FAQ:
            return {
                ...state,
                deleteFaq: action.payload,
            };
        case DELETE_ATTRIBUTE: 
        return {
            ...state,
            deleteAttribute: action.payload,
        };
        case DELETE_TESTIMONIAL: 
        return {
            ...state,
            deleteTestimonial: action.payload,
        };
        case RESET_GLOBAL_STATE:
            return initialState;
        default:
            return state;
    }
};

export default generalManagementReducer;