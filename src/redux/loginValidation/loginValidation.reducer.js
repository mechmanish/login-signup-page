
import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR } from './loginValidation.type';


const initialState = {
    isError: false,
    isRequest: false,
    isSuccess: false,
    info: {}
}


//We are going to creating the reducer, which is a function that takes two arguments: The current state and the action and returns the new state.

const loginReducer = (currentState = initialState, action) => {

    // console.log(action, "actionVale in a reducer as parameter");

    switch (action.type) {
        case FETCH_LOGIN_REQUEST:
            return {                        //new state
                isError: false,
                isRequest: true,
                isSuccess: false,
                info: action.payload,

                sect : "login api request"
            };


        case FETCH_LOGIN_SUCCESS:
            return {                        //new state
                isError: false,
                isRequest: false,
                isSuccess: true,
                info: action.payload,

                sect : "login api fetch info success"
            };

        case FETCH_LOGIN_ERROR:
            return {                        //new state
                isError: true,
                isRequest: false,
                isSuccess: false,
                info: action.payload,

                sect : "login api fetch info error"
            };

        default:
            console.log("login reducer ka default value");
            return currentState;
    }
}

export default loginReducer;

//Now let’s tackle the action
