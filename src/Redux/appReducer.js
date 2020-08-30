 const ADD_PLACES = 'ADD_PLACES';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET_USERS';
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
// const TOGGLE_IS_PROGRESS = 'TOGGLE_IS_PROGRESS';

let initialState = {
    PLACES : [
        { name: "Moscow", zip: "2122265" },
        { name: "London", zip: "44418" },
        { name: "San Francisco", zip: "2487956" },
        { name: "St Petersburg", zip: "2123260" }
    ]
};


const appReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_PLACES:
                return {...state, PLACES: action.PLACES}

        default:
            return state;
    }
}


export const addPlaces = () =>{
    return {type: ADD_PLACES}
}


export default appReducer;