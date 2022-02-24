
import { combineReducers } from 'redux';

import loginReducer from './loginValidation/loginValidation.reducer';

import registrationReducer from './userRegistration/userRegistration.reducer';

import listOfUsersReducer from './listOfUsersRegistred/lisOfUsersRegistred.reducer';

import addNewPollReducer from './addNewPollRedux/addNewPollRedux.reducer';

import listAllPollsReducer from './listAllPollsRedux/listAllPollsRedux.reducer';


const rootReducer = combineReducers({

    registrationReducerData: registrationReducer,
    loginReducerData: loginReducer,
    listOfUsersReducerData: listOfUsersReducer,
    addNewPollReducerData: addNewPollReducer,
    listAllPollsReducerData: listAllPollsReducer,

});

export default rootReducer;