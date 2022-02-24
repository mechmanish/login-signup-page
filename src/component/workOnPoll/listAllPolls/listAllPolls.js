import React, { useEffect } from "react";

import { getListAllPolls } from "../../../redux/listAllPollsRedux/listAllPollsRedux.action";
import { useDispatch, useSelector } from 'react-redux';

import ListPoll from "./listPoll";

const ListAllPolls = () => {

    const listAllPolls = useSelector(state => state);
    console.log(listAllPolls, "list Of All Polls from useSelector ki value in listAllPolls.js");


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListAllPolls());
        console.log("listAllPolls.js mae dispatch time");
    }, []);

    const PollsData = listAllPolls.listAllPollsReducerData.info?.data;
    console.log(PollsData, "==>>polls data");


    return (
        <div>
            <h1>List of All Polls</h1>
            <ul>
                {PollsData ? (PollsData.map((poll) => <ListPoll key={poll._id} poll={poll} />)) : ("Welcome to the list of polls")}
            </ul>
        </div>
    );
}

export default ListAllPolls;