import {
    FETCH_USER_FAILURE,
    FETCH_USER_SUCCESS,
    UPDATE_PAGEINATION_DETAIL,
    CHANGE_PAGE_NO,
    CHANGE_LIMIT,
    UPDATE_FILTER,
    CHANGE_SEARCH,
    SELECTED_COUNTRY,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER
} from '../constants.js';

const initial_state = {
    data: [],
    page_no: 1,
    limit: 10,
    filter: {
        country: []
    },
    selected_country: '',
    search: ''
}

const userReducer = (state = initial_state, action) => {

    switch(action.type) {

        case ADD_USER: 

            const newUser = action.payload;

            const newData = [newUser, ...state.data];
            
            return {
                ...state,
                data: newData
            }
        
        case DELETE_USER: 
            
            const userId = action.payload;
            let index = -1;

            for(const [i, user] of state.data.entries()) {

                if(user.Id === userId) {
                    index = i;
                    break;
                }
            }

            state.data.splice(index, 1);

            return {
                ...state,
                data: [...state.data]
            }
            
        case UPDATE_USER: 

            const updatedUser = action.payload;

            for(let user of state.data) {

                if(user.Id !== updatedUser.Id) {
                    continue;
                } 

                user = {
                    ...updatedUser
                }
            }
            
            return {
                ...state,
                data: [...state.data]
            }

        case FETCH_USER_SUCCESS: 

            return {
                ...state,
                data: action.payload
            }
        
        case FETCH_USER_FAILURE: 
            
            //toast error for faliure;
            return {
                ...state,
                data: []
            }

        case UPDATE_PAGEINATION_DETAIL: 
            
            return {
                ...state,
                page_no: action.payload.page,
                limit: action.payload.limit,
            }

        case CHANGE_PAGE_NO: 
            
            return {
                ...state,
                page_no: action.payload.page
            }
        
        case CHANGE_LIMIT: 
            
            return {
                ...state,
                limit: action.payload.limit
            }

        case UPDATE_FILTER: 
            
            const filter = {...action.payload};

            return {
                ...state,
                filter
            }
        
        case CHANGE_SEARCH: 

            return {
                ...state,
                search: action.payload
            }
        
        case SELECTED_COUNTRY: 

            return {
                ...state,
                selected_country: action.payload
            }

        default:
            return state
    }
}

export default userReducer;