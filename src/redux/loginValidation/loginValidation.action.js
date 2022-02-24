import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR } from './loginValidation.type';

const getApiUrl = (myString) =>{
    console.log(myString, "=> login api url mae myString ki value");
    return `https://secure-refuge-14993.herokuapp.com/login?username=${myString.username}&password=${myString.password}`;
}


//And here's we set up success and failure actions after polling an API:
//Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.

export function getLoginInfoRequest(data){                            //Data ki value, joh bhi hm search krge woh send ki ja rhi h as an argument
    console.log(data, "=>getLoginInfoRequest data ki value");

    return (dispatch) => {                          //nameless function
        dispatch(fetchLoginRequest());              //initial action dispatched

        const url = getApiUrl(data);                // polling an API
        console.log(url, "=>login api url");

        fetch(url)                                  //fetch the data from api
            .then(resp => resp.json())                 //convert that data in json format
            .then(loginDetail => dispatch(fetchLoginSuccess(loginDetail)))                  //once we got the json formated data from api, we dispatch the success action 
            .catch(()=>{                               //what if we catch error from api
                dispatch(fetchLoginError())             //then we call error action
            })
    }
}


//actions:-

function fetchLoginRequest(loginData) {         
    console.log(loginData, "login request action");        //yaha loginData ki value undefine hai
    return {
        type: FETCH_LOGIN_REQUEST,
        payload: loginData
    }
    
}

function fetchLoginSuccess(loginData) {                 //yaha loginData = movieDetail, joh ki fetched json data h
    console.log(loginData, "login success action");
    return {
        type: FETCH_LOGIN_SUCCESS,
        payload: loginData
    }
}

function fetchLoginError(loginData) {
    console.log("login error action");
    return {
        type: FETCH_LOGIN_ERROR,
        payload: loginData
    }
}
