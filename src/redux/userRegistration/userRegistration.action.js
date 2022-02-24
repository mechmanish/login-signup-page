import { FETCH_REGISTRATION_REQUEST, FETCH_REGISTRATION_SUCCESS, FETCH_REGISTRATION_ERROR } from './userRegistration.type';

const getApiUrl = (myString) =>{
    console.log(myString, "=>registration api url mae myString ki value");
    return `https://secure-refuge-14993.herokuapp.com/add_user?username=${myString.Username}&password=${myString.Password}&role=${myString.Role}`;
}


//And here's we set up success and failure actions after polling an API:
//Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.

export function getRegistrationRequest(data){                            //Data ki value, joh bhi hm search krge woh send ki ja rhi h as an argument
    console.log(data, "=>getRegistrationRequest data ki value");

    return (dispatch) => {                          //nameless function
        dispatch(fetchRegistrationRequest());              //initial action dispatched

        const url = getApiUrl(data);                // polling an API
        console.log(url, "=>registration api url");

        fetch(url)                                  //fetch the data from api
            .then(resp => resp.json())                 //convert that data in json format
            .then(registrationDetail => dispatch(fetchRegistrationSuccess(registrationDetail)))                  //once we got the json formated data from api, we dispatch the success action 
            .catch(()=>{                               //what if we catch error from api
                dispatch(fetchRegistrationError())             //then we call error action
            })
    }
}


//actions:-

function fetchRegistrationRequest(registrationData) {         
    console.log(registrationData, "regis. request action");        //yaha registrationData ki value undefine hai
    return {
        type: FETCH_REGISTRATION_REQUEST,
        payload: registrationData
    }
    
}

function fetchRegistrationSuccess(registrationData) {                 //yaha registrationData = registrationDetail, joh ki fetched json data h
    console.log(registrationData, "regis. success action");
    return {
        type: FETCH_REGISTRATION_SUCCESS,
        payload: registrationData
    }
}

function fetchRegistrationError(registrationData) {
    console.log("regis. error action");
    return {
        type: FETCH_REGISTRATION_ERROR,
        payload: registrationData
    }
}
