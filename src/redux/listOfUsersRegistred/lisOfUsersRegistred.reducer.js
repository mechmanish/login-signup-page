
import { FETCH_LISTOFUSERS_REQUEST, FETCH_LISTOFUSERS_SUCCESS, FETCH_LISTOFUSERS_ERROR } from './lisOfUsersRegistred.type';


const initialState = {
    isError: false,
    isRequest: false,
    isSuccess: false,
    info: {}
}


//We are going to creating the reducer, which is a function that takes two arguments: The current state and the action and returns the new state.

const listOfUsersReducer = (currentState = initialState, action) => {

    // console.log(action, "actionVale in a reducer as parameter");

    switch (action.type) {
        case FETCH_LISTOFUSERS_REQUEST:
            return {                        //new state
                isError: false,
                isRequest: true,
                isSuccess: false,
                info: action.payload,

                sect : "login api request"
            };


        case FETCH_LISTOFUSERS_SUCCESS:
            return {                        //new state
                isError: false,
                isRequest: false,
                isSuccess: true,
                info: action.payload,

                sect : "login api fetch info success"
            };

        case FETCH_LISTOFUSERS_ERROR:
            return {                        //new state
                isError: true,
                isRequest: false,
                isSuccess: false,
                info: action.payload,

                sect : "login api fetch info error"
            };

        default:
            console.log("listOfUsers reducer ka default value");
            return currentState;
    }
}

export default listOfUsersReducer;

//Now let’s tackle the action
