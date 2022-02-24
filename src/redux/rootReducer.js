
import { combineReducers } from 'redux';

import loginReducer from './loginValidation/loginValidation.reducer';

import registrationReducer from './userRegistration/userRegistration.reducer';

import listOfUsersReducer from './listOfUsersRegistred/lisOfUsersRegistred.reducer';


const rootReducer = combineReducers({

    registrationReducerData: registrationReducer,
    loginReducerData: loginReducer,
    listOfUsersReducerData: listOfUsersReducer,

});

export default rootReducer;