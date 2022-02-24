import { FETCH_ADDNEWPOLL_REQUEST, FETCH_ADDNEWPOLL_SUCCESS, FETCH_ADDNEWPOLL_ERROR } from './addNewPollRedux.type';

const getApiUrl = (myString) => {
    console.log("=> login api url mae myString ki value");
    return `https://secure-refuge-14993.herokuapp.com/add_poll?title=${myString.title}&options=${myString.option1}____${myString.option2}____${myString.option3}____${myString.option4}`;
}


//And here's we set up success and failure actions after polling an API:
//Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.

export function getAddNewPoll(data) {                            //Data ki value, joh bhi hm search krge woh send ki ja rhi h as an argument
    console.log(data, "=>getAddNewPoll ki data parameter ki value");

    return (dispatch) => {                          //nameless function
        dispatch(fetchAddNewPollRequest());              //initial action dispatched

        const url = getApiUrl(data);                // polling an API
        console.log(url, "=>AddNewPoll api url");

        fetch(url)                                  //fetch the data from api
            .then(resp => resp.json())                 //convert that data in json format
            .then(usersDetail => dispatch(fetchAddNewPollSuccess(usersDetail)))                  //once we got the json formated data from api, we dispatch the success action 
            .catch(() => {                               //what if we catch error from api
                dispatch(fetchAddNewPollError())             //then we call error action
            })
    }
}


//actions:-

function fetchAddNewPollRequest(usersData) {
    console.log(usersData, "AddNewPoll request action");        //yaha usersData ki value undefine hai
    return {
        type: FETCH_ADDNEWPOLL_REQUEST,
        payload: usersData
    }

}

function fetchAddNewPollSuccess(usersData) {                 //yaha usersData = usersDetail, joh ki fetched json data h
    console.log(usersData, "AddNewPoll success action");
    return {
        type: FETCH_ADDNEWPOLL_SUCCESS,
        payload: usersData
    }
}

function fetchAddNewPollError(usersData) {
    console.log("AddNewPoll error action");
    return {
        type: FETCH_ADDNEWPOLL_ERROR,
        payload: usersData
    }
}
