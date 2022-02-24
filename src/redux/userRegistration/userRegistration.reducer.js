
import { FETCH_REGISTRATION_REQUEST, FETCH_REGISTRATION_SUCCESS, FETCH_REGISTRATION_ERROR } from './userRegistration.type';


const initialState = {
    isError: false,
    isRequest: false,
    isSuccess: false,
    info: {}
}


//We are going to creating the reducer, which is a function that takes two arguments: The current state and the action and returns the new state.

const registrationReducer = (currentState = initialState, action) => {

    // console.log(action, "actionVale in a reducer as parameter");

    switch (action.type) {
        case FETCH_REGISTRATION_REQUEST:
            return {                        //new state
                isError: false,
                isRequest: true,
                isSuccess: false,
                info: action.payload,

                sect: "regis. api request"
            };


        case FETCH_REGISTRATION_SUCCESS:
            return {                        //new state
                isError: false,
                isRequest: false,
                isSuccess: true,
                info: action.payload,

                sect: "regis. api fetch info success"
            };

        case FETCH_REGISTRATION_ERROR:
            return {                        //new state
                isError: true,
                isRequest: false,
                isSuccess: false,
                info: action.payload,

                sect: "regis. api fetch info error"
            };

        default:
            console.log("regis. reducer ka default value");
            return currentState;
    }
}

export default registrationReducer;

//Now let’s tackle the action
