
import { FETCH_ADDNEWPOLL_REQUEST, FETCH_ADDNEWPOLL_SUCCESS, FETCH_ADDNEWPOLL_ERROR } from './addNewPollRedux.type';


const initialState = {
    isError: false,
    isRequest: false,
    isSuccess: false,
    info: {}
}


//We are going to creating the reducer, which is a function that takes two arguments: The current state and the action and returns the new state.

const addNewPollReducer = (currentState = initialState, action) => {

    // console.log(action, "actionVale in a reducer as parameter");

    switch (action.type) {
        case FETCH_ADDNEWPOLL_REQUEST:
            return {                        //new state
                isError: false,
                isRequest: true,
                isSuccess: false,
                info: action.payload,

                sect : "login api request"
            };


        case FETCH_ADDNEWPOLL_SUCCESS:
            return {                        //new state
                isError: false,
                isRequest: false,
                isSuccess: true,
                info: action.payload,

                sect : "login api fetch info success"
            };

        case FETCH_ADDNEWPOLL_ERROR:
            return {                        //new state
                isError: true,
                isRequest: false,
                isSuccess: false,
                info: action.payload,

                sect : "login api fetch info error"
            };

        default:
            console.log("addNewPoll reducer ka default value");
            return currentState;
    }
}

export default addNewPollReducer;

//Now let’s tackle the action
