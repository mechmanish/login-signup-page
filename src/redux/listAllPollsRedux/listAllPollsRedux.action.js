import { FETCH_LISTALLPOLLS_REQUEST, FETCH_LISTALLPOLLS_SUCCESS, FETCH_LISTALLPOLLS_ERROR } from './listAllPollsRedux.type';

const getApiUrl = (lstOfPll) => {
    console.log("=> listAllPolls api url mae parameter ki value");
    return `https://secure-refuge-14993.herokuapp.com/list_polls`;
}


//And here's we set up success and failure actions after polling an API:
//Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.

export function getListAllPolls(data) {                            //Data ki value, joh bhi hm search krge woh send ki ja rhi h as an argument
    console.log(data, "=>getListAllPolls ki data parameter ki value");

    return (dispatch) => {                          //nameless function
        dispatch(fetchListAllPollsRequest());              //initial action dispatched

        const url = getApiUrl(data);                // polling an API
        console.log(url, "=>ListAllPolls api url");

        fetch(url)                                  //fetch the data from api
            .then(resp => resp.json())                 //convert that data in json format
            .then(usersDetail => dispatch(fetchListAllPollsSuccess(usersDetail)))                  //once we got the json formated data from api, we dispatch the success action 
            .catch(() => {                               //what if we catch error from api
                dispatch(fetchListAllPollsError())             //then we call error action
            })
    }
}


//actions:-

function fetchListAllPollsRequest(usersData) {
    console.log(usersData, "ListAllPolls request action");        //yaha usersData ki value undefine hai
    return {
        type: FETCH_LISTALLPOLLS_REQUEST,
        payload: usersData
    }

}

function fetchListAllPollsSuccess(usersData) {                 //yaha usersData = usersDetail, joh ki fetched json data h
    console.log(usersData, "ListAllPolls success action");
    return {
        type: FETCH_LISTALLPOLLS_SUCCESS,
        payload: usersData
    }
}

function fetchListAllPollsError(usersData) {
    console.log("ListAllPolls error action");
    return {
        type: FETCH_LISTALLPOLLS_ERROR,
        payload: usersData
    }
}
