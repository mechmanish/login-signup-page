import { FETCH_LISTOFUSERS_REQUEST, FETCH_LISTOFUSERS_SUCCESS, FETCH_LISTOFUSERS_ERROR } from './lisOfUsersRegistred.type';

const getApiUrl = () => {
    console.log("=> login api url mae myString ki value");
    return `https://secure-refuge-14993.herokuapp.com/list_users`;
}


//And here's we set up success and failure actions after polling an API:
//Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.

export function getListOfUsers(data) {                            //Data ki value, joh bhi hm search krge woh send ki ja rhi h as an argument
    console.log(data, "=>getLoginInfoRequest data ki value");

    return (dispatch) => {                          //nameless function
        dispatch(fetchListOfUsersRequest());              //initial action dispatched

        const url = getApiUrl(data);                // polling an API
        console.log(url, "=>listOfUsers api url");

        fetch(url)                                  //fetch the data from api
            .then(resp => resp.json())                 //convert that data in json format
            .then(usersDetail => dispatch(fetchListOfUsersSuccess(usersDetail)))                  //once we got the json formated data from api, we dispatch the success action 
            .catch(() => {                               //what if we catch error from api
                dispatch(fetchListOfUsersError())             //then we call error action
            })
    }
}


//actions:-

function fetchListOfUsersRequest(usersData) {
    console.log(usersData, "ListOfUsers request action");        //yaha usersData ki value undefine hai
    return {
        type: FETCH_LISTOFUSERS_REQUEST,
        payload: usersData
    }

}

function fetchListOfUsersSuccess(usersData) {                 //yaha usersData = usersDetail, joh ki fetched json data h
    console.log(usersData, "ListOfUsers success action");
    return {
        type: FETCH_LISTOFUSERS_SUCCESS,
        payload: usersData
    }
}

function fetchListOfUsersError(usersData) {
    console.log("ListOfUsers error action");
    return {
        type: FETCH_LISTOFUSERS_ERROR,
        payload: usersData
    }
}
