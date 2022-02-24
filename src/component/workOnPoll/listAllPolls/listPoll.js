import React from "react";

import Option from "./option";

const ListPoll = ({poll}) =>{

    const optionArray = poll.options;

    return(
        <div>
            <li>
                <div>
                    {poll.title}
                </div>
                <ol>
                    {optionArray.map((option) => <Option key={option.option} option={option} /> )}
                </ol>
            </li>
        </div>
    );
}

export default ListPoll;