import React, { useState } from "react";
import "./addNewPoll.css";

import { getAddNewPoll } from "../../../redux/addNewPollRedux/addNewPollRedux.action";
import { useDispatch, useSelector } from 'react-redux';

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const AddNewPoll = () => {

    const [pollTitle, setPollTitle] = useState("");

    // const [option, setOption] = useState([]);

    const [opt1, setOpt1] = useState("");
    const [opt2, setOpt2] = useState("");
    const [opt3, setOpt3] = useState("");
    const [opt4, setOpt4] = useState("");


    const pollTitleHandler = (event) => {
        setPollTitle(event.target.value);
    }

    const opt1Handler = (event) => {
        setOpt1(event.target.value);
    }

    const opt2Handler = (event) => {
        setOpt2(event.target.value);
    }

    const opt3Handler = (event) => {
        setOpt3(event.target.value);
    }

    const opt4Handler = (event) => {
        setOpt4(event.target.value);
    }



    const addNewPoll = useSelector(state => state);
    console.log(addNewPoll, "addNewPoll from useSelector ki value in addNewPoll.js");


    const dispatch = useDispatch();

    const addBtnHandler = () => {
        dispatch(getAddNewPoll({
            title: pollTitle,
            option1: opt1,
            option2: opt2,
            option3: opt3,
            option4: opt4
        }));
    }


    return (
        <div>
            <div className="LstAllPollsBtn">
                <Button variant="contained">
                    <Link to="/listAllPolls">List All Polls</Link>
                </Button>
            </div>
            <div className="addNewPollbox">

                <div className="addNewPollBorder">
                    <div>
                        <h1 className="title">Add New Poll</h1>
                    </div>

                    <div>
                        <p>Title of the poll</p>
                        <input onChange={pollTitleHandler} value={pollTitle} placeholder="title" type="text" />
                    </div>
                    <form className="formSection">
                        <p>Options</p>
                        <section>
                            <p>option 1</p>
                            <input onChange={opt1Handler} value={opt1} className="optionName" placeholder="title" type="text" />
                        </section>
                        <section>
                            <p>option 2</p>
                            <input onChange={opt2Handler} value={opt2} className="optionName" placeholder="title" type="text" />
                        </section>
                        <section>
                            <p>option 3</p>
                            <input onChange={opt3Handler} value={opt3} className="optionName" placeholder="title" type="text" />
                        </section>
                        <section>
                            <p>option 4</p>
                            <input onChange={opt4Handler} value={opt4} className="optionName" placeholder="title" type="text" />
                        </section>
                    </form>
                    <div>
                        <Button className="addBtn" onClick={addBtnHandler} variant="contained">ADD</Button>
                        {/* <button onClick={addBtnHandler}>Add</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewPoll;