import { FETCH_LISTALLPOLLS_REQUEST, FETCH_LISTALLPOLLS_SUCCESS, FETCH_LISTALLPOLLS_ERROR } from './listAllPollsRedux.type';


const initialState = {
    isError: false,
    isRequest: false,
    isSuccess: false,
    info: {}
}


//We are going to creating the reducer, which is a function that takes two arguments: The current state and the action and returns the new state.

const listAllPollsReducer = (currentState = initialState, action) => {

    // console.log(action, "actionVale in a reducer as parameter");

    switch (action.type) {
        case FETCH_LISTALLPOLLS_REQUEST:
            return {                        //new state
                isError: false,
                isRequest: true,
                isSuccess: false,
                info: action.payload,

                sect : "listAllPolls api request"
            };


        case FETCH_LISTALLPOLLS_SUCCESS:
            return {                        //new state
                isError: false,
                isRequest: false,
                isSuccess: true,
                info: action.payload,

                sect : "listAllPolls api fetch info success"
            };

        case FETCH_LISTALLPOLLS_ERROR:
            return {                        //new state
                isError: true,
                isRequest: false,
                isSuccess: false,
                info: action.payload,

                sect : "listAllPolls api fetch info error"
            };

        default:
            console.log("listAllPolls reducer ka default value");
            return currentState;
    }
}

export default listAllPollsReducer;

//Now let’s tackle the action
